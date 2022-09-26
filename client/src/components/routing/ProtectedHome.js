import {Outlet} from 'react-router-dom'
import  {AuthContext} from '../../contexts/AuthContext'
import {useContext} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import NavbarMenu from '../layout/NavbarMenu'
import NavbarMenuLogout from '../layout/NavbarMenuLogout'
import Header from '../layout/Header/Header'

const ProtectedRoute = () => {
    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext)
    if(authLoading)
    return(
        <div className="spinner-container">
            <Spinner animation='border' variant='info'/>
        </div>
    )
  return  isAuthenticated ? (<><NavbarMenu/><Outlet /></>) : (<><Header/><Outlet /></>)
  
}

export default ProtectedRoute