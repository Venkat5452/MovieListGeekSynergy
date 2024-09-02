import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import IMG1 from '../Images/img1.jpg'
import { useEffect, useState } from 'react';
import { CiLogout , CiLogin} from "react-icons/ci";

function Header() {
  const [flag,setflag]=useState(false);
  useEffect(()=>{
    if(localStorage.getItem('logintoken')!==null) {
      setflag(true);
    }
  },[setflag])
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" sticky="">
      <Container className="text-primary d-flex">
        <Navbar.Brand href="/">
          <div><img
            src={IMG1}
            width="70"
            height="70"
            className="d-inline-block align-top rounded rounded-3 ms-2"
            alt="logo"
          /></div><div><span style={{ color: "white" }} className=''>Movie List</span></div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <NavDropdown title="Company Info" id="basic-nav-dropdown">
              <NavDropdown.Item ><h5 className='text-dark'>Company: </h5>Geeksynergy Technologies Pvt Ltd</NavDropdown.Item>
              <NavDropdown.Item ><h5>Address: </h5>Sanjayanagar, Bengaluru-56</NavDropdown.Item>
              <NavDropdown.Item ><h5>Phone: </h5>XXXXXXXXX09</NavDropdown.Item>
              <NavDropdown.Item ><h5>Email: </h5>XXX@gmail.com</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ color: "white" }} href="/"></Nav.Link>
            {flag && <Nav.Link style={{ color: "white" }} href="/Logout">Log out<CiLogout /></Nav.Link>}
            {!flag && <Nav.Link style={{ color: "white" }} href="/">Login<CiLogin /></Nav.Link>}
            {!flag && <Nav.Link style={{ color: "white" }} href="/signup">Sign Up<CiLogin /></Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;