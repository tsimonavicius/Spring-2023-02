import * as React from "react";
import {Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom"
import AddItemModal from "../components/dashboard/AddItemModal";
import {getProducts} from "../api/productsApi";
import {useQuery} from "react-query";

const Products = () => {

    const navigate = useNavigate()

    const {isLoading, data: products} = useQuery('getProducts', getProducts)

    const loadingElement = isLoading && (
        <TableRow>
            <TableCell colSpan={5} align="center"><CircularProgress /></TableCell>
        </TableRow>
    ) // = false | <TableRow...>

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
                    {
                        loadingElement || products.map((listProduct, i) =>
                            <TableRow key={i}>
                                <TableCell>{listProduct.name}</TableCell>
                                <TableCell>{listProduct.price}</TableCell>
                                <TableCell>{listProduct.description}</TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={() => navigate(`/products/${listProduct.id}`) }>
                                        Preview
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
            <AddItemModal />
        </>
    )
}

export default Products;