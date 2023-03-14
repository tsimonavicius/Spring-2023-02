import { createSlice, configureStore } from "@reduxjs/toolkit";
import Decimal from "decimal.js";

const createState = (products, totalQuantity, totalSum, cartEmpty) => {
  return { products: products, totalQuantity: totalQuantity, totalSum: totalSum, cartEmpty: cartEmpty };
};

const initState = createState([], 0, 0, true);

const productsSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {
    addProduct(state, action) {
      const currentProducts = [...state.products];
      const existingProduct = currentProducts.find((pr) => pr.id === action.payload.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        currentProducts.push({ ...action.payload, quantity: 1 });
      }

      state.products = currentProducts;
      state.totalQuantity = currentProducts.reduce((sum, product) => sum + product.quantity, 0);
      state.totalSum = currentProducts.reduce((sum, product) => sum.plus(new Decimal(product.price).mul(product.quantity)), new Decimal(0)).toString();
      state.cartEmpty = currentProducts.length === 0;
    },
    removeProduct(state, action) {
      const currentProducts = [...state.products];
      const existingProductIndex = currentProducts.findIndex((product) => product.id === action.payload);

      if (currentProducts[existingProductIndex].quantity > 1) {
        currentProducts[existingProductIndex].quantity--;
      } else {
        currentProducts.splice(existingProductIndex, 1);
      }

      state.products = currentProducts;
      state.totalQuantity = currentProducts.reduce((sum, product) => sum + product.quantity, 0);
      state.totalSum = currentProducts.reduce((sum, product) => sum.plus(new Decimal(product.price).mul(product.quantity)), new Decimal(0)).toString();
      state.cartEmpty = currentProducts.length === 0;
    },
  },
});

const reduxStore = configureStore({
  reducer: productsSlice.reducer,
});

export default reduxStore;
export const productActions = productsSlice.actions;
