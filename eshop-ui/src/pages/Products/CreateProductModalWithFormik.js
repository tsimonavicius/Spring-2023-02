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
import {useCreateProduct, useProducts} from "../../api/productsApi";

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
                }}>
                    {({isSubmitting, submitForm}) => (
                            <>
                                <DialogContent>
                                    <DialogContentText>Create new Product</DialogContentText>
                                        <Field label="Description"
                                           name="description"
                                           variant="standard"
                                           fullWidth
                                           as={TextField}
                                        />

                                        <Field label="Product Name"
                                               name="productName"
                                               variant="standard"
                                               fullWidth
                                               as={TextField}
                                        />

                                        <Field label="Price"
                                           name="price"
                                           variant="standard"
                                           fullWidth
                                           as={TextField}
                                        />

                                    {isSubmitting && <CircularProgress color="inherit" />}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                                    <Button disabled={isSubmitting} onClick={submitForm}>Add</Button>
                                </DialogActions>
                            </>
                        )
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
