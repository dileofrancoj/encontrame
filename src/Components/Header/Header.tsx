import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
          <Link to="/personas">
            <Nav.Link href="/personas">Personas</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
