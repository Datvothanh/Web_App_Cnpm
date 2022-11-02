import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import AlertMessage from "../../../components/layout/AlertMessage";

const Login = () => {
    //Context
    const { loginUser } = useContext(AuthContext);

    //Local state
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const [alert, setAlert] = useState(null);

    const { username, password } = loginForm;
    const onChangeLoginForm = (event) =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

    const login = async (event) => {
        event.preventDefault();
        try {
            const loginData = await loginUser(loginForm);
            if (!loginData.success) {
                setAlert({ type: "danger", message: loginData.message });
                setTimeout(() => setAlert(null), 5000);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <form onSubmit={(e) => login(e)}>
                    <AlertMessage info={alert} bsPrefix="alertMessage"/>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChangeLoginForm}
                    ></input>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChangeLoginForm}
                    ></input>
                    <button type="submit" className={styles.submit}>
                        Login
                    </button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/register">
                    <button className={styles.switch}>Register</button>
                </Link>
            </div>
        </div>
    );
};
export default Login;
