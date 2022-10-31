import {createContext , useReducer, useEffect} from 'react'
import { usersReducer } from '../reducers/usersReducer'
import { apiUrl , LOCAL_STORAGE_TOKEN_NAME} from './constants'
import axios from 'axios'

export const UsersContext = createContext()

const UsersContextProvider = ({children}) =>{

     //State
     const [usersState, dispatch] = useReducer(usersReducer,{
        users: [],
        usersLoading: true,
    })
  

    
    //Get all posts
    const getUsers = async() => {
        try {
            const response = await axios.get(`${apiUrl}/auth/all`)
            if (response.data.success){
                dispatch({type:'USERS_LOADED_SUCCESS', payload: response.data.users})
            }
        } catch (error) {
            dispatch({type:'USERS_LOADED_FAIL'})
        }
    }

     

    //Context data
    const UsersContextData = {getUsers, usersState}

    //Return provider
    return(
        <UsersContext.Provider value={UsersContextData}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider