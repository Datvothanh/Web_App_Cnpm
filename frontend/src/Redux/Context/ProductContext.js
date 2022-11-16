import { createContext , useReducer } from "react";
import { ProductReducers } from "../Reducers/productReducer"; 
import axios from'axios'

export const ProductContext = createContext()

const ProductContextProvider = ({children}) => {

    const [productState, dispatch] = useReducer( ProductReducers , 
        {
            products: [],
            loading: true
        })


    const getProductsByCategory = async (id) => {
        try{
            const response = await axios.get(`http://localhost:3000/api/products/category/${id}`)
            if (response.data.success){
                dispatch({type:'PRODUCT_LIST_SUCCESS', payload: response.data.products})
            }
        }catch(error){
            return error.response.data 
                ? error.response.data 
                : {success: false, mess: 'Server error'}
        }
    }

    const ProductContextData = {productState , getProductsByCategory}

    return (
        <ProductContext.Provider value={ProductContextData}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider