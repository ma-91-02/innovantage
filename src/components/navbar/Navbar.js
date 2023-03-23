import { Container, Navbar, Nav} from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import './navbar.scss'
import brand from'../../images/logo.svg'

const Navbar3 = () => {
  return (
    <>
      <Navbar className="section__navbar" expand="lg">
        <Container>
        <Navbar.Brand href="home"><img src={brand} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link className="my__nav__link" href="home">Home</Nav.Link>
            <Nav.Link className="my__nav__link" href="link">About us</Nav.Link>
            <Nav.Link className="my__nav__link" href="link">Our Approach</Nav.Link>
            <Nav.Link className="my__nav__link" href="link">Our Story</Nav.Link>
            <Nav.Link className="my__nav__link" href="link">Reasons to choose Us</Nav.Link>
            <Nav.Link className="my__nav__link" href="link">Software Leasing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar3;
