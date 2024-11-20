import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="op"
              src="https://cdn-icons-png.flaticon.com/128/7006/7006898.png"
              alt="GreenBloom Logo"
              height="30"
            />
            GreenBloom
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-between">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="about" className="nav-link">About Us</Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="home-consults" className="dropdown-item">Home Consults</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="bussiness-consults" className="dropdown-item">Business Consults</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="plant-care-advice" className="dropdown-item">Plant Care Advice</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="plant-repotting" className="dropdown-item">Plant Repotting</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PlantaSHOP" id="basic-nav-dropdown-shop">
                <NavDropdown.Item>
                  <Link to="essentional-oils" className="dropdown-item">Essentional Oils</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="botanical-art" className="dropdown-item">Botanical Art</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="terrariums" className="dropdown-item">Terrariums</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="vases" className="dropdown-item">Vases</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="tools" className="dropdown-item">Tools</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="signin" className="nav-link">Sign In</Link>
              <Link to="signup" className="nav-link">Sign Up</Link>
              <Link to="profile" className="nav-link">Profile</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
