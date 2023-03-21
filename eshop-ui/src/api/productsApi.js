import HTTP from "./";
import { useMutation, useQuery } from "react-query";

// http://localhost:8080/products/all
const getProducts = () =>
  HTTP.get("/products/all")
    .then((response) => response.data)
    .catch((error) => console.log(error.message));

// http://localhost:8080/products/create
const createProduct = (product) => HTTP.post("/products/create", product);

const createProductJson = (product) =>
  HTTP.post("/products", { ...product, name: product.productName }).then(
    (response) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(response.data), 5000);
      })
  );

const useProducts = () => {
  const context = useQuery("getProducts", getProducts);
  return { ...context, products: context.data };
};

const useCreateProduct = (config) => {
  const mutation = useMutation(createProductJson, config);
  return mutation.mutateAsync;
};

export { createProduct, useProducts, useCreateProduct };
