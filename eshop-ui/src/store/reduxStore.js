import { createStore } from "redux";

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const initState = { products: [], totalQuantity: 0, totalSum: 0, cartEmpty: true };

const productReducer = (state = initState, action) => {
  console.log(`we in`);
  //todo prideti likusia logikos dali
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
