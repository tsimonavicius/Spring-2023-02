import {createContext, useContext, useState} from "react";

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
        },
        getTotalProducts: () => {
            return products // [{...}, {...}]
                .reduce((sum, product) => sum + product.quantity, 0)
        }
        // [1, 2, 3].reduce((3, 3) => {return 3 + 3}, 0) == 6
    }

    return (
        <CartContext.Provider value={cartContextState}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export default CartContextProvider
export { useCartContext }
