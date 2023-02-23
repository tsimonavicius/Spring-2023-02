import HTTP from "./"
import {useQuery} from "react-query";

// http://localhost:8080/products/all
const getProducts = () => HTTP.get("/products/all")
    .then(response =>
        new Promise((resolve) => {
            setTimeout(() => resolve(response.data), 5000)
    }))

// http://localhost:8080/products/create
const createProduct = (product) => HTTP.post("/products/create", product)

const useProducts = () => {
    const context = useQuery('getProducts', getProducts)
    return {...context, products: context.data}
}

export { createProduct, useProducts }