import { createContext, useReducer } from "react";
import { ProductByCategoryReducer } from "../reducers/ProductByCategoryReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const ProductByCategoryContext = createContext()

const ProductByCategoryContextProvider = ({children}) => {

    //State
    const [productByCategoryState, dispatch] = useReducer(ProductByCategoryReducer,{
        productsByCategory: [],
        productsByCategoryLoading: true,
    })



     //Get all posts
     const getProductsByCategory = async(id_category) => {
        try {
            const response = await axios.get(`${apiUrl}/filter/${id_category}`)
            if (response.data.success){
                dispatch({type:'PRODUCT_LOADED_SUCCESS', payload: response.data.products})
            }
        } catch (error) {
            dispatch({type:'PRODUCT_LOADED_FAIL'})
        }
    }

    //Product context data
    const productByCategoryContextData = {productByCategoryState, getProductsByCategory}

    return(
        <ProductByCategoryContext.Provider value = {productByCategoryContextData}>
            {children}
        </ProductByCategoryContext.Provider>
    )
}


export default ProductByCategoryContextProvider