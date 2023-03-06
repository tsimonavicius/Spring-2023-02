import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import * as React from "react";
import {useContext} from "react";
import { CartContext } from "./CartContextProvider";
import Decimal from "decimal.js";

const Cart = () => {

    const { products } = useContext(CartContext)

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
                <TableCell>{listProduct.quantity}</TableCell>
                <TableCell>{new Decimal(listProduct.price).mul(listProduct.quantity).toString()}</TableCell>
                <TableCell>
                    <Button variant="contained">
                        Remove
                    </Button>
                </TableCell>
            </TableRow>
        ))
    )

    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Pavadinimas</TableCell>
                    <TableCell>Kaina</TableCell>
                    <TableCell>Kiekis</TableCell>
                    <TableCell>Suma</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {noProductsElement || productsElement}
            </TableBody>
        </Table>
    )
}

export default Cart
