import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../layout/Header/Header";
import Footer from '../layout/Footer';
import Admin from "../layout/Header/Admin";
const ProtectedRoute = () => {
    const {
        authState: { authLoading, isAuthenticated , user },
    } = useContext(AuthContext);
    if (authLoading)
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );

    if (user.permission === 0)
    { 
        return (
            <>
                <Admin/>
                <Outlet />
                <Footer />  
            </>
        );
    }
    else if (user.permission === 1){
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        );
    }
    
};

export default ProtectedRoute;
