import { createContext, useReducer } from "react";
import { ProductDetailReducer } from "../reducers/ProductDetailReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const ProductDetailContext = createContext()

const ProductDetailContextProvider = ({children}) => {

    //State
    const [productDetailState, dispatch] = useReducer(ProductDetailReducer,{
        productDetail: [],
        productDetailLoading: true,
    })



     //Get all posts
     const getProductDetail = async(id_product) => {
        try {
            const response = await axios.get(`${apiUrl}/filter/product/${id_product}`)
            if (response.data.success){
                dispatch({type:'PRODUCT_LOADED_SUCCESS', payload: response.data.product})
            }
        } catch (error) {
            dispatch({type:'PRODUCT_LOADED_FAIL'})
        }
    }

    //Product context data
    const productDetailContextData = {productDetailState, getProductDetail}

    return(
        <ProductDetailContext.Provider value = {productDetailContextData}>
            {children}
        </ProductDetailContext.Provider>
    )
}


export default ProductDetailContextProvider