import { createContext, useReducer } from "react";

import { apiUrl } from "./constants";
import axios from "axios";
import { CartReducer } from "../reducers/cartReducer";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    //State
    const [cartState, dispatch] = useReducer(CartReducer,{
        cart: [],
        cartLoading: true,
    })



     //Get all posts
     const getCart = async(userId) => {
        try {
            const response = await axios.get(`${apiUrl}/addCart/${userId}`)
            if (response.data.success){
                dispatch({type:'CART_SUCCESS', payload: response.data.carts})
            }
        } catch (error) {
            dispatch({type:'CART_LOADED_FAIL'})
        }
    }

    //Product context data
    const cartContextData = {cartState, getCart}

    return(
        <CartContext.Provider value = {cartContextData}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider