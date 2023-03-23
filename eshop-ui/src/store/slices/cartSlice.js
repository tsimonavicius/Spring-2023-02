import {createSlice} from "@reduxjs/toolkit";
import Decimal from "decimal.js";

const PRODUCTS_KEY = "PRODUCTS_KEY";

const createState = (products, totalQuantity, totalSum, cartEmpty) => {
    return { products: products, totalQuantity: totalQuantity, totalSum: totalSum, cartEmpty: cartEmpty };
};

const persistToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const retrieveFromLocalStorage = (key) => {
    return localStorage.getItem(key);
};

const initState = () => {
    const rawValue = retrieveFromLocalStorage(PRODUCTS_KEY);
    if (!rawValue) {
        return createState([], 0, 0, true);
    }
    const retrievedState = JSON.parse(rawValue);
    return createState(retrievedState.products, retrievedState.totalQuantity, retrievedState.totalSum, retrievedState.cartEmpty);
};

const cartSlice = createSlice({
    name: "cart",
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
            persistToLocalStorage(PRODUCTS_KEY, state);
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
            persistToLocalStorage(PRODUCTS_KEY, state);
        },
    },
});

export default cartSlice.reducer
export const cartActions = cartSlice.actions;