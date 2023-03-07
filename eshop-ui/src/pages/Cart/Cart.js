import {Button, Table, TableBody, TableCell, TableFooter, TableHead, TableRow} from "@mui/material";
import * as React from "react";
import { useCartContext } from "./CartContextProvider";
import Decimal from "decimal.js";

const Cart = () => {

    const { products, getTotalSum } = useCartContext()

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
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2}/>
                    <TableCell>Total</TableCell>
                    <TableCell>{getTotalSum().toString()}</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default Cart
