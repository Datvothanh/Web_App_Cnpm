import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Button from 'react-bootstrap/esm/Button';
import logoutIcon from '../../assets/logout.svg'
const NavbarMenu = () => {
    const {
        authState: { user},
        logoutUser
    } = useContext(AuthContext)
    const logout = () => logoutUser()
    // if (isAuthenticated) return <Navigate to='/home'/>
  return (
    <Navbar bg="primary" expand="lg" variant='dark' className='shadow'>
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/home">Home</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
            
            <Nav.Link >
                Welcome {user.username}
            </Nav.Link>

            <Button variant='secondary' className='font-weight-bolder text-white' onClick={logout}>
                <img src={logoutIcon} alt="logoutIcon" width='32' height='32' classname='mr-2'/>
                Logout
            </Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarMenu