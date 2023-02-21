import * as React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

function createData(name, description, price) {
    return {
        name: name,
        description: description,
        price: price,
        addDate: new Date()
    }
}

const allProducts_dummyData = [
    createData("labai geras produktas 1", "best desc ever 1", 11.10),
    createData("labai geras produktas 2", "best desc ever 2", 12.21),
    createData("labai geras produktas 3", "best desc ever 3", 33.11),
    createData("labai geras produktas 4", "best desc ever 4", 44.01),
    createData("labai geras produktas 5", "best desc ever 5", 51.23),
    createData("labai geras produktas 6", "best desc ever 6", 165.12),
    createData("labai geras produktas 7", "best desc ever 7", 3456.23),
    createData("labai geras produktas 8", "best desc ever 8", 66.65),
    createData("labai geras produktas 8", "best desc ever 8", 66.65),
    createData("labai geras produktas 8", "best desc ever 8", 66.65),
    createData("labai geras produktas 8", "best desc ever 8", 66.65),
    createData("labai geras produktas 8", "best desc ever 8", 66.65),
    createData("labai geras produktas 8", "best desc ever 8", 66.65),
    createData("labai geras produktas 8", "best desc ever 8", 66.65),
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
            {/*<AddItemModal />*/}
        </>
    )
}

export default Products;