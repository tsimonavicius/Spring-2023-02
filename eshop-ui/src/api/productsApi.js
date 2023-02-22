import HTTP from "./"

// http://localhost:8080/products/all
const getProducts = () => HTTP.get("/products/all")

// http://localhost:8080/products/create
const createProduct = (product) => HTTP.post("/products/create", product)

export { getProducts, createProduct }