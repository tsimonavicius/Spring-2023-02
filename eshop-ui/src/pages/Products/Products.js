import * as React from "react";
import {Button, CircularProgress, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useProducts} from "../../api/productsApi";
import CreateProductModalWithFormik from "./CreateProductModalWithFormik";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useContext} from "react";
import {CartContext} from "../Cart/CartContextProvider";

const Products = () => {
    const { addProduct } = useContext(CartContext)

    const navigate = useNavigate();

    const {isFetching, products = [], refetch} = useProducts();

    const loadingElement = isFetching && (
        <TableRow>
            <TableCell colSpan={5} align="center">
                <CircularProgress/>
            </TableCell>
        </TableRow>
    ); // = false | <TableRow...>

    const noProductsElement = !products.length && (
        <TableRow>
            <TableCell colSpan={5} align="center">
                No products found
            </TableCell>
        </TableRow>
    )

    const productsElement = (
        products.map((listProduct, i) => (
            <TableRow key={i}>
                <TableCell>{listProduct.name}</TableCell>
                <TableCell>{listProduct.price}</TableCell>
                <TableCell>{listProduct.description}</TableCell>
                <TableCell>{listProduct.createDate}</TableCell>
                <TableCell>
                    <Button variant="contained" onClick={() => navigate(`/products/${listProduct.id}`)}>
                        Preview
                    </Button>
                    <IconButton onClick={() => addProduct({
                        id: listProduct.id,
                        name: listProduct.name,
                        price: listProduct.price
                    })}>
                        <AddShoppingCartIcon/>
                    </IconButton>
                </TableCell>
            </TableRow>
        ))
    )

    return (
        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Pavadinimas</TableCell>
                        <TableCell>Kaina</TableCell>
                        <TableCell>Aprašymas</TableCell>
                        <TableCell>Įkėlimo data</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loadingElement || noProductsElement || productsElement}
                </TableBody>
            </Table>
            {/*<AddItemModal />*/}
            <CreateProductModalWithFormik fetchProducts={refetch}/>
        </>
    );
};

export default Products;
