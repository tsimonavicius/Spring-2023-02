import * as React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogContentText,
    DialogActions,
    CardActionArea,
    CardMedia
} from "@mui/material";
import {Formik} from "formik";

const CreateProductModalWithFormik = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add new item</DialogTitle>

                <Formik initialValues={{
                    name: '',
                    price: '',
                    description: ''
                }} onSubmit={(props) => {
                    console.log("submit props", props)
                }}>
                    {(formikProps) => (
                        <>
                            <DialogContent>
                                <DialogContentText>To add to this item data, please click 'Add'
                                    button</DialogContentText>
                                {/*<TextField autoFocus margin="dense" id="name" label="Item name" type="text" fullWidth variant="standard" value={name} onChange={(event) => setName(event.target.value)} />*/}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={null}>Cancel</Button>
                                <Button onClick={null}>Add</Button>
                            </DialogActions>
                        </>
                    )}
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
