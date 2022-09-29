import { createContext, useReducer } from "react";
import { CategoryReducer } from "../reducers/CategoryReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const CategoryContext = createContext()

const CategoryContextProvider = ({children}) => {

    //State
    const [categoryState, dispatch] = useReducer(CategoryReducer,{
        categories: [],
        categoriesLoading: true,
    })


    //Get all posts
    const getCategories = async() => {
        try {
            const response = await axios.get(`${apiUrl}/category`)
            if (response.data.success){
                dispatch({type:'CATEGORY_LOADED_SUCCESS', payload: response.data.categories})
            }
        } catch (error) {
            dispatch({type:'CATEGORY_LOADED_FAIL'})
        }
    }

    //Product context data
    const categoryContextData = {categoryState, getCategories}

    return(
        <CategoryContext.Provider value = {categoryContextData}>
            {children}
        </CategoryContext.Provider>
    )
}


export default CategoryContextProvider