import HTTP from "./"

// http://localhost:8080/products/all
const getProducts = () => HTTP.get("/products/all")
    .then(response =>
        new Promise((resolve) => {
            setTimeout(() => resolve(response.data), 5000)
    }))

// http://localhost:8080/products/create
const createProduct = (product) => HTTP.post("/products/create", product)

export { getProducts, createProduct }