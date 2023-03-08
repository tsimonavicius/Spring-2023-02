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

const CreateProductModalWithFormik = ({fetchProducts, open, onClose, product}) => {
    const [alertOpen, setAlertOpen] = React.useState(false);
    const createProduct = useCreateProduct()

    const initialValues = product ? {
        id: product.id,
        productName: product.name,
        price: product.price,
        description: product.description
    } : {
        id: null,
        productName: '',
        price: '',
        description: ''
    }

    const title = product ? "Edit product" : "Create new product"

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>

                <Formik initialValues={initialValues}
                        onSubmit={async (product, {setSubmitting}) => {
                            await createProduct(product)

                            setSubmitting(false)
                            onClose()
                            fetchProducts()
                            setAlertOpen(true)
                        }}
                        validationSchema={productValidationSchema}>
                    {(props) => {
                        return (
                            <>
                                {/*<PropState {...props}/>*/}
                                <DialogContent>
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

                                    {props.isSubmitting && <CircularProgress color="inherit"/>}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button disabled={props.isSubmitting} onClick={props.submitForm}>Add</Button>
                                </DialogActions>
                            </>
                        )
                    }
                    }
                </Formik>
            </Dialog>
            <Snackbar open={alertOpen}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                      autoHideDuration={6000}
                      onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity="success" sx={{width: '100%'}}>
                    Product created!!!
                </Alert>
            </Snackbar>
        </>
    )
}

export default CreateProductModalWithFormik;
