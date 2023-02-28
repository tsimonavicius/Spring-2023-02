import * as React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogContentText, DialogActions, CardActionArea, CardMedia } from "@mui/material";
import { createProduct } from "../../api/productsApi";

const AddItemModal = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState(null);
  const [imageData, setImageData] = React.useState(null);

  const PLACE_HOLDER_IMG = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImageData(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const addNewProduct = () => {
    console.log("added something");
    createProduct(getFormData());
    handleClick();
    // window.location.reload(false);
  };

  const getFormData = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("imageData", imageData);
    return formData;
  };

  return (
    <>
      <Dialog open={open} onClose={handleClick}>
        <DialogTitle>Add new item</DialogTitle>
        <DialogContent>
          <DialogContentText>To add to this item data, please click 'Add' button</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Item name" type="text" fullWidth variant="standard" value={name} onChange={(event) => setName(event.target.value)} />
          <TextField autoFocus margin="dense" id="description" label="Item description" type="text" fullWidth variant="standard" value={description} onChange={(event) => setDescription(event.target.value)} />
          <TextField autoFocus margin="dense" id="price" label="Item price" type="number" fullWidth variant="standard" value={price} onChange={(event) => setPrice(event.target.value)} />
          <CardActionArea sx={{ maxWidth: "300px", maxHeight: "300px", marginLeft: "22%" }}>
            <CardMedia component="img" image={imagePreview !== null ? imagePreview : PLACE_HOLDER_IMG} />
          </CardActionArea>
          <input accept="image/*" onChange={handleFileUpload} type="file" id="product-image" style={{ display: "none" }} />
          <div style={{ textAlign: "center" }}>
            <label htmlFor="product-image">
              <Button variant="raised" component="span">
                Upload
              </Button>
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={addNewProduct}>Add</Button>
        </DialogActions>
      </Dialog>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <Button variant="outlined" onClick={handleClick}>
          Add new item
        </Button>
      </div>
    </>
  );
};

export default AddItemModal;
