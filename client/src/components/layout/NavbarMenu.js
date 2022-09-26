import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "react-bootstrap/esm/Button";
import logoutIcon from "../../assets/logout.svg";
const NavbarMenu = () => {
    const {
        authState: { user },
        logoutUser,
    } = useContext(AuthContext);
    const logout = () => logoutUser();
    // if (isAuthenticated) return <Navigate to='/home'/>
    return (
        <Navbar bg="primary" expand="lg" variant="dark" className="shadow">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                
            </Container>
        </Navbar>
    );
};

export default NavbarMenu;
