import { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
})

export const contextProvider = ({children}) => {
    return <CartContext.Provider>{children}</CartContext.Provider>
}

const cartReducer = (state, action) => {
    u
}

export default CartContext;