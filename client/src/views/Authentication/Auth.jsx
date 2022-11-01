import styles from "./auth.module.scss";
import Login from "./Login";
import Register from "./Register";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const Auth = ({ authRoute }) => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    let body;
    if (authLoading)
        body = (
            <div className="d-flex justify-content-center mt-2">
                <Spinner animation="border" variant="info" />
            </div>
        );
    else if (isAuthenticated) return <Navigate to="/home" />;
    else
        body = (
            <>
                {authRoute === "login" && <Login />}
                {authRoute === "register" && <Register />}
            </>
        );
    return (
    <div className={styles.auth}>
        <div className={styles.title}>TechZone</div>
        {body}
        <Link to="/home">
            <button className={styles.home}>
                Home
            </button>
        </Link>
    </div>
    );
};

export default Auth;
