import { createContext , useReducer } from "react";
import { CategoryReducers } from "../Reducers/CategoryReducers"; 
import axios from'axios'

export const CategoryContext = createContext()

const CategoryContextProvider = ({children}) => {

    const [categoryState, dispatch] = useReducer( CategoryReducers , 
        {
            categories: [],
            loading: true
        })


    const getCategories = async () => {
        try{
            const response = await axios.get(`http://localhost:4000/api/category`)
            if (response.data.success){
                dispatch({type:'CATEGORY_LIST_SUCCESS', payload: response.data.categories})
            }
        }catch(error){
            return error.response.data
                ? error.response.data 
                : {success: false, mess: 'Server error'}
        }
    }


    const CategoryContextData = {categoryState , getCategories }

    return (
        <CategoryContext.Provider value={CategoryContextData}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider