import {Navigate , Outlet} from 'react-router-dom'
import  {AuthContext} from '../../contexts/AuthContext'
import {useContext} from 'react'
import Spinner from 'react-bootstrap/Spinner'



const ProtectedRoute = () => {
    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext)
    if(authLoading)
    return(
        <div className="spinner-container">
            <Spinner animation='border' variant='info'/>
        </div>
    )
  return  isAuthenticated ? <Outlet /> : <Navigate to='/login'/>
  
}

export default ProtectedRoute