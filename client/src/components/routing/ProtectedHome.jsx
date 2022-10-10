import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../layout/Header/Header";
import Footer from '../layout/Footer';
const ProtectedRoute = () => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);
    if (authLoading)
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default ProtectedRoute;
