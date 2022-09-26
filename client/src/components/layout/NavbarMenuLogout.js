import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavbarMenu = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark" className="shadow">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Nav.Link href="/login">Login</Nav.Link>
            </Container>
        </Navbar>
    );
};

export default NavbarMenu;
