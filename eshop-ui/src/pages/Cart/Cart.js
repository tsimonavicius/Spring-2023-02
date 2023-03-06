import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import * as React from "react";

const Cart = () => {
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
                <TableRow>
                    <TableCell colSpan={5} align="center">
                        No products found
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default Cart
