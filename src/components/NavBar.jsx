import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import imgNavBar from "../images/programacion.png";

const NavBar = () => {
  return (
        <Navbar expand="lg" sticky="top">
        <Container>
             <Navbar.Brand href="#home" className="navEdit">
           <h4 className="colorName">{"< "}</h4>
           <h4 className="name">Andrés Rodríguez</h4>
           <h4 className="colorName">{" />"}</h4>
         </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav navLinks">
            <Nav className="navLinks">
              <Nav.Link href="#home" className="links">
              <i className='bx bxs-home-alt-2 iconEdit'></i>
                Inicio
              </Nav.Link>
              <Nav.Link href="#s-about" className="links">
              <i className='bx bxs-user iconEdit'></i>
                Acerca de mí
              </Nav.Link>
              <Nav.Link href="#s-tecnologies" className="links">
              <i className='bx bx-expand-horizontal iconEdit'></i>
                Tecnologías
              </Nav.Link>
              <Nav.Link href="#s-portfolio" className="links">
              <i className='bx bx-laptop iconEdit'></i>
                Portafolio
              </Nav.Link>
              <Nav.Link href="#s-contact" className="links">
              <i className='bx bxs-envelope iconEdit'></i>
                Contáctame
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
