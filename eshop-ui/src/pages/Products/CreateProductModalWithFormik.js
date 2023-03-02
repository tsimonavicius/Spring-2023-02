import * as React from "react";
import {
    Alert,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Snackbar,
    TextField,
} from "@mui/material";
import {Field, Formik} from "formik";
import {useCreateProduct} from "../../api/productsApi";
import * as Yup from 'yup'
import PropState from "../../components/PropState";


const productValidationSchema = Yup.object().shape({
    productName: Yup.string()
        .min(3, ({label, min}) => `${label} must be greater than ${min} chars`)
        .max(10)
        .required()
        .label("Product name"),
    price: Yup.number()
        .positive("Price must be positive")
        .required(),
    description: Yup.string()
        .min(1)
        .max(255)
        .required()
})

const CreateProductModalWithFormik = ({fetchProducts}) => {
    const [open, setOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);

    const createProduct = useCreateProduct()

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add new item</DialogTitle>

                <Formik initialValues={{
                    productName: '',
                    price: '',
                    description: ''
                }} onSubmit={async (product, { setSubmitting }) => {
                    await createProduct(product)

                    setSubmitting(false)
                    setOpen(false)
                    fetchProducts()
                    setAlertOpen(true)
                }}
                validationSchema={productValidationSchema}>
                    {(props) => {

                        console.log(props)

                        return (
                            <>
                                <PropState {...props}/>
                                <DialogContent>
                                    <DialogContentText>Create new Product</DialogContentText>
                                        <Field label="Description"
                                           name="description"
                                           variant="standard"
                                           fullWidth
                                           error={!!props.errors.description && props.touched.description}
                                           helperText={props.touched.description && props.errors["description"]}
                                           as={TextField}
                                        />

                                        <Field label="Product Name"
                                               name="productName"
                                               variant="standard"
                                               fullWidth
                                               error={!!props.errors.productName && props.touched.productName}
                                               helperText={props.touched.productName && props.errors["productName"]}
                                               as={TextField}
                                        />

                                        <Field label="Price"
                                           name="price"
                                           variant="standard"
                                           fullWidth
                                           error={!!props.errors.price && props.touched.price}
                                           helperText={props.touched.price && props.errors["price"]}
                                           as={TextField}
                                        />

                                    {props.isSubmitting && <CircularProgress color="inherit" />}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                                    <Button disabled={props.isSubmitting} onClick={props.submitForm}>Add</Button>
                                </DialogActions>
                            </>
                        )}
                    }
                </Formik>
            </Dialog>
            <Snackbar open={alertOpen}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                      autoHideDuration={6000}
                      onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity="success" sx={{ width: '100%' }}>
                    Product created!!!
                </Alert>
            </Snackbar>

            <div style={{marginTop: "10px", textAlign: "center"}}>
                <Button variant="outlined" onClick={() => setOpen(true)}>
                    Add new product
                </Button>
            </div>
        </>
    )
}

export default CreateProductModalWithFormik;
