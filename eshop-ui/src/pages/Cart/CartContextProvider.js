import { createContext, useContext, useState } from "react";
import Decimal from "decimal.js";

const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const cartContextState = {
    products,
    addProduct: (product) => {
      const productsList = [...products];

      const existingProduct = productsList.find((pr) => pr.id === product.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        productsList.push({ ...product, quantity: 1 });
      }

      setProducts(productsList);
    },
    getTotalQuantity: () => {
      return products.reduce((sum, product) => sum + product.quantity, 0);
    },
    getTotalSum: () => {
      return products.reduce((sum, product) => sum.plus(new Decimal(product.price).mul(product.quantity)), new Decimal(0));
    },
    removeProduct: (id) => {
      const productsList = [...products];
      const existingProductIndex = productsList.findIndex((product) => product.id === id);

      if (products[existingProductIndex].quantity > 1) {
        productsList[existingProductIndex].quantity--;
      } else {
        productsList.splice(existingProductIndex, 1);
      }

      setProducts(productsList);
      return productsList.length === 0;
    },
  };

  return <CartContext.Provider value={cartContextState}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
export { useCartContext };
