import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Leaf,
  Home,
  Briefcase,
  Flower,
  // MessageCircle,
  User,
  ShoppingCart,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100">
      <Navbar expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center text-green-700"
          >
            <Leaf className="me-2" size={24} />
            <span className="font-weight-bold fs-4">GreenBloom</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className="text-green-700 hover:text-green-900 d-flex align-items-center"
              >
                <Home size={18} className="me-1" />
                Home
              </Nav.Link>
              <NavDropdown
                title={
                  <span className="text-green-700">
                    <Briefcase size={18} className="me-1" />
                    Contact
                  </span>
                }
                id="basic-nav-dropdown-shop"
              >
                <NavDropdown.Item as={Link} to="contact-us">
                  Get In Touch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="about">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="faqs-List">
                  FAQ
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span className="text-green-700">
                    <Flower size={18} className="me-1" />
                    Services
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="home-consults">
                  Home Consults
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="bussiness-consults">
                  Business Consults
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="plant-care-advice">
                  Plant Care Advice
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="plant-repotting">
                  Plant Repotting
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span className="text-green-700">
                    <Leaf size={18} className="me-1" />
                    PlantaSHOP
                  </span>
                }
                id="basic-nav-dropdown-srouhop"
              >
                <NavDropdown.Item as={Link} to="essentional-oils">
                  Essential Oils
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="botanical-art">
                  Botanical Art
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="terrariums">
                  Terrariums
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="vases">
                  Vases
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="tools">
                  Tools
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="Chatroom"
                className="text-green-700 hover:text-green-900 d-flex align-items-center"
              >
                {/* <MessageCircle size={18} className="me-1" />
                BloomChat */}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="signin"
                className="btn btn-outline-success me-2"
              >
                Sign In
              </Nav.Link>
              <Nav.Link as={Link} to="signup" className="btn btn-success me-2">
                Sign Up
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="profile"
                className="text-green-700 hover:text-green-900 d-flex align-items-center"
              >
                <User size={18} className="me-1" />
                Profile
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/cartePage"
                className="text-green-700 hover:text-green-900 d-flex align-items-center"
              >
                <ShoppingCart size={18} className="me-1" />
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
