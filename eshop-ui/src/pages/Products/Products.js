import * as React from "react";
import { Button, CircularProgress, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../api/productsApi";
import CreateProductModalWithFormik from "./CreateProductModalWithFormik";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import EditIcon from "@mui/icons-material/Edit";
import { useCartContext } from "../Cart/CartContextProvider";
import { useState } from "react";
import i18n from "i18next";

const Products = () => {
  const { addProduct } = useCartContext();
  const navigate = useNavigate();
  const { isFetching, products = [], refetch } = useProducts();
  const [openProductModal, setOpenProductModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const loadingElement = isFetching && (
    <TableRow>
      <TableCell colSpan={5} align="center">
        <CircularProgress />
      </TableCell>
    </TableRow>
  ); // = false | <TableRow...>

  const noProductsElement = !products.length && (
    <TableRow>
      <TableCell colSpan={5} align="center">
        No products found
      </TableCell>
    </TableRow>
  );

  const productsElement = products.map((listProduct, i) => (
    <TableRow key={i}>
      <TableCell>{listProduct.name}</TableCell>
      <TableCell>{listProduct.price}</TableCell>
      <TableCell>{listProduct.description}</TableCell>
      <TableCell>{listProduct.createDate}</TableCell>
      <TableCell>
        <Button variant="contained" onClick={() => navigate(`/products/${listProduct.id}`)}>
          Preview
        </Button>
        <IconButton
          onClick={() =>
            addProduct({
              id: listProduct.id,
              name: listProduct.name,
              price: listProduct.price,
            })
          }
        >
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setOpenProductModal(true);
            setEditProduct(listProduct);
          }}
        >
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  ));

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{i18n.t("pName")}</TableCell>
            <TableCell>{i18n.t("pPrice")}</TableCell>
            <TableCell>{i18n.t("pDesc")}</TableCell>
            <TableCell>{i18n.t("pDate")}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{loadingElement || noProductsElement || productsElement}</TableBody>
      </Table>
      {/*<AddItemModal />*/}
      <CreateProductModalWithFormik fetchProducts={refetch} open={openProductModal} onClose={() => setOpenProductModal(false)} product={editProduct} />

      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <Button
          variant="outlined"
          onClick={() => {
            setOpenProductModal(true);
            setEditProduct(null);
          }}
        >
          Add new product
        </Button>
      </div>
    </>
  );
};

export default Products;
