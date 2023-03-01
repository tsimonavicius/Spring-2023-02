import * as React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions, TextField, CircularProgress,
} from "@mui/material";
import {Field, Formik} from "formik";
import PropState from "../../components/PropState";

const CreateProductModalWithFormik = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add new item</DialogTitle>

                <Formik initialValues={{
                    productName: '',
                    price: '',
                    description: ''
                }} onSubmit={(values, { setSubmitting }) => {

                    setTimeout(() => {
                        console.log("submitted values:", values)
                        setSubmitting(false)
                    }, 2000)
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

            <div style={{marginTop: "10px", textAlign: "center"}}>
                <Button variant="outlined" onClick={() => setOpen(true)}>
                    Add new product
                </Button>
            </div>
        </>
    )
}

export default CreateProductModalWithFormik;
