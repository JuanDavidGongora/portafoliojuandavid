import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import imgNavBar from "../images/programacion.png";

const NavBar = () => {
  return (

    // <Navbar sticky="top" variant="dark" style={{ color: "#A3AAB0" }}>
    //   <Container>
    //     <Navbar.Brand href="#home" className="navEdit">
    //       <img
    //         src={imgNavBar}
    //         className="d-inline-block align-text-top imgNav"
    //       />
    //       <h4>Andrés Rodríguez</h4>
    //     </Navbar.Brand>
    //     <Nav className="navLinks">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
        <Navbar expand="lg" sticky="top">
        <Container>
             <Navbar.Brand href="#home" className="navEdit">
           <h4 className="colorName">{"< "}</h4>
           <h4>Andrés Rodríguez</h4>
           <h4 className="colorName">{" />"}</h4>
         </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav navLinks">
            <Nav className="navLinks">
              <Nav.Link href="#home" className="links">
              <i className='bx bxs-home-alt-2 iconEdit'></i>
                Home
              </Nav.Link>
              <Nav.Link href="#home" className="links">
              <i className='bx bxs-user iconEdit'></i>
                About Me
              </Nav.Link>
              <Nav.Link href="#link" className="links">
              <i className='bx bx-expand-horizontal iconEdit'></i>
                Habilities
              </Nav.Link>
              <Nav.Link href="#link" className="links">
              <i className='bx bx-laptop iconEdit'></i>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#link" className="links">
              <i className='bx bxs-envelope iconEdit'></i>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
