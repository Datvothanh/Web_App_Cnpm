import styles from "./register.module.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import AlertMessage from "../../../components/layout/AlertMessage";

const Register = () => {
    const { registerUser } = useContext(AuthContext);

    //Local state
    const [registerForm, setRegisterForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
        address: "",
        permission: 1,
    });

    const [alert, setAlert] = useState(null);

    const { username, password, confirmPassword, name, address, permission } = registerForm;
    const onChangeRegisterForm = (event) =>
        setRegisterForm({
            ...registerForm,
            [event.target.name]: event.target.value,
        });

    const register = async (event) => {
        event.preventDefault();

        console.log(registerForm);
        if (password !== confirmPassword) {
            setAlert({ type: "danger", message: "Passwords do not match" });
            setTimeout(() => setAlert(null), 5000);
            return;
        }

        try {
            const registerData = await registerUser(registerForm);
            if (!registerData.success) {
                setAlert({ type: "danger", message: registerData.message });
                setTimeout(() => setAlert(null), 5000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <AlertMessage info={alert} bsPrefix="alertMessage" />
                <form onSubmit={(e) => register(e)}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChangeRegisterForm}
                    ></input>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChangeRegisterForm}
                    ></input>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={onChangeRegisterForm}
                    ></input>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={onChangeRegisterForm}
                    ></input>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={onChangeRegisterForm}
                    ></input>
                    <button type="submit" className={styles.submit}>
                        Register
                    </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login">
                    <button className={styles.switch}>Login</button>
                </Link>
            </div>
        </div>
    );
};
export default Register;
