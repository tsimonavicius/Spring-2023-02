import { createStore } from "redux";
import Decimal from "decimal.js";

const createState = (products, totalQuantity, totalSum, cartEmpty) => {
  return { products: products, totalQuantity: totalQuantity, totalSum: totalSum, cartEmpty: cartEmpty };
};

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const initState = createState([], 0, 0, true);

const productReducer = (state = initState, action) => {
  console.log(`we in`);
  if (action.type === ADD_PRODUCT) {
    const currentProducts = [...state.products];
    const existingProduct = currentProducts.find((pr) => pr.id === action.product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      currentProducts.push({ ...action.product, quantity: 1 });
    }
    return {
      products: currentProducts,
      totalQuantity: currentProducts.reduce((sum, product) => sum + product.quantity, 0),
      totalSum: currentProducts.reduce((sum, product) => sum.plus(new Decimal(product.price).mul(product.quantity)), new Decimal(0)),
      cartEmpty: currentProducts === 0,
    };
  }
  return state;
};

const reduxStore = createStore(productReducer);

export default reduxStore;

export const storeAddProduct = (product) => {
  return { type: ADD_PRODUCT, product: product };
};

export const storeRemoveProduct = (productId) => {
  return { type: REMOVE_PRODUCT, productId: productId };
};
