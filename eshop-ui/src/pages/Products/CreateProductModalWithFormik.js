import * as React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions, TextField,
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
                }} onSubmit={(values, utils) => {
                    console.log("submit values", values)
                    console.log("submit utils", utils)

                    utils.setSubmitting(true);
                    setTimeout(() => utils.setSubmitting(false), 2000)
                }}>
                    {(formikProps) => {
                        console.log("formikProps", formikProps)
                        return (
                            <>
                                <PropState {...formikProps} />
                                <DialogContent>
                                    <DialogContentText>Create new Product</DialogContentText>
                                        <input name="description"
                                               value={formikProps.values.description}
                                               onChange={formikProps.handleChange}
                                               onBlur={formikProps.handleBlur}
                                        />
                                        <TextField id="productName"
                                                   label="Product Name"
                                                   name="productName"
                                                   variant="standard"
                                                   fullWidth
                                                   value={formikProps.values.productName}
                                                   onChange={formikProps.handleChange}
                                                   onBlur={formikProps.handleBlur}
                                        />
                                        <TextField id="price"
                                                   label="Price"
                                                   name="price"
                                                   variant="standard"
                                                   fullWidth
                                                   value={formikProps.values.price}
                                                   onChange={formikProps.handleChange}
                                                   onBlur={formikProps.handleBlur}
                                        />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={null}>Cancel</Button>
                                    <Button onClick={formikProps.submitForm}>Add</Button>
                                </DialogActions>
                            </>
                        )
                    }}
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
