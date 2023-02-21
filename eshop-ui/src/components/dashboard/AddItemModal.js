import * as React from "react";
import {Button, Dialog, DialogTitle, DialogContent, TextField, DialogContentText, DialogActions } from "@mui/material";


const AddItemModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const addNewProduct = () => {
        console.log("added something")
        handleClick();
    }

    return (
        <>
            <Dialog open={open} onClose={handleClick}>
                <DialogTitle>Add new item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add to this item data, please click 'Add' button
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Item name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Item description"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Item price"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick}>Cancel</Button>
                    <Button onClick={addNewProduct}>Add</Button>
                </DialogActions>
            </Dialog>
            <div style={{marginTop: "10px", textAlign: "center"}}>
                <Button variant="outlined" onClick={handleClick}>
                    Add new item
                </Button>
            </div>
        </>
    )

};

export default AddItemModal;