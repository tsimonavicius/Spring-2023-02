import * as React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import AddItemModal from "../components/dashboard/AddItemModal";

function createData(id, name, description, price) {
    return {
        id: id,
        name: name,
        description: description,
        price: price,
        addDate: new Date()
    }
}

const allProducts_dummyData = [
    createData(1, "labai geras produktas 1", "best desc ever 1", 11.10),
    createData(2, "labai geras produktas 2", "best desc ever 2", 12.21),
    createData(3, "labai geras produktas 3", "best desc ever 3", 33.11),
    createData(4, "labai geras produktas 4", "best desc ever 4", 44.01),
    createData(5, "labai geras produktas 5", "best desc ever 5", 51.23),
    createData(6, "labai geras produktas 6", "best desc ever 6", 165.12),
    createData(7, "labai geras produktas 7", "best desc ever 7", 3456.23),
    createData(8, "labai geras produktas 8", "best desc ever 8", 66.65),
    createData(9, "labai geras produktas 8", "best desc ever 8", 66.65),
    createData(10, "labai geras produktas 8", "best desc ever 8", 66.65),
    createData(11, "labai geras produktas 8", "best desc ever 8", 66.65),
    createData(12, "labai geras produktas 8", "best desc ever 8", 66.65),
    createData(13, "labai geras produktas 8", "best desc ever 8", 66.65),
    createData(14, "labai geras produktas 8", "best desc ever 8", 66.65),
]

const Products = () => {

    return (
        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Pavadinimas</TableCell>
                        <TableCell >Kaina</TableCell>
                        <TableCell>Aprašymas</TableCell>
                        <TableCell>Įkėlimo data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allProducts_dummyData.map((listProduct, i) =>
                        <TableRow key={i}>
                            <TableCell>{listProduct.name}</TableCell>
                            <TableCell>{listProduct.price}</TableCell>
                            <TableCell>{listProduct.description}</TableCell>
                            <TableCell><span>{listProduct.addDate.toLocaleDateString()}</span></TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <AddItemModal />
        </>
    )
}

export default Products;