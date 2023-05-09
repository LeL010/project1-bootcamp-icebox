import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import SearchBar from "../pages/Recipes/searchbar";

class navbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Icebox
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ingredients">
              Ingredients
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes">
              Recipes
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default navbar;
