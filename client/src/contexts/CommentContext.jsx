import { createContext, useReducer } from "react";
import { commentReducer } from "../reducers/commentReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const CommentContext = createContext()

const CommentContextProvider = ({children}) => {

    //State
    const [commentState, dispatch] = useReducer(commentReducer,{
        comment: [],
        commentLoading: true,
    })



     //Get all posts
     const getComment = async(id_product) => {
        try {
            const response = await axios.get(`${apiUrl}/comment/${id_product}`)
            if (response.data.success){
                dispatch({type:'PRODUCT_LOADED_SUCCESS', payload: response.data.comment})
            }
        } catch (error) {
            dispatch({type:'PRODUCT_LOADED_FAIL'})
        }
    }

    //Product context data
    const CommentContextData = {commentState, getComment}

    return(
        <CommentContext.Provider value = {CommentContextData}>
            {children}
        </CommentContext.Provider>
    )
}


export default CommentContextProvider