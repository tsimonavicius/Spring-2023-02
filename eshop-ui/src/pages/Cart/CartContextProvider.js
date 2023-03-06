import {createContext, useState} from "react";

const CartContext = createContext(null)

const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const cartContextState = {
        products,
        addProduct: (product) => {
            const productsList = [...products]

            const existingProduct = productsList.find(pr => pr.id === product.id)

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                productsList.push({...product, quantity: 1})
            }

            setProducts(productsList)
        }
    }

    return (
        <CartContext.Provider value={cartContextState}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
export { CartContext }
