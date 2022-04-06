import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './NavBar.css';
const NavBar = () => {
  return (
    <div >
      <Navbar bg="dark"  expand="lg"  className="px-2 bg-xs-white"> 
        <Container fluid >
          <Navbar.Brand href="#"><img style={{height:'34px',width:'134.5px'}} src='https://res.cloudinary.com/dzghsspe7/image/upload/v1649194979/Grocery/loma_zmeogn.png' alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex justify-content-center align-items-center"
              style={{ maxHeight: "200px",maxWidth:"447px" }}
              
            >
              <Nav.Link href="#action1"><h5 className="text-white">About</h5></Nav.Link>
              <Nav.Link href="#action2"><h5 className="text-white">Account</h5></Nav.Link>
              <Nav.Link href="#action2"><button className="login-button">Login</button></Nav.Link> 
              <Nav.Link href="#action2"><button className="signUp-button">Sign Up</button></Nav.Link> 

        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
