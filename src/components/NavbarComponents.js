import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavbarComponents extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Kasir Apss</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link Link to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Data Master" id="basic-nav-dropdown">
                <NavDropdown.Item><Link Link to="/User">User</Link></NavDropdown.Item>
                <NavDropdown.Item><Link Link to='/Kategori'>Kategori</Link></NavDropdown.Item>
                <NavDropdown.Item> <Link Link to='Produk'>Produk</Link> </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link >
                <Link Link to="/Transaksi">Transaksi</Link>
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown title="Profil" id="basic-nav-dropdown" className="d-flex">
                <NavDropdown.Item><Link Link to='/Kategori'>Ganti Password</Link></NavDropdown.Item>
                <NavDropdown.Item><Link Link to="/User">Logout</Link></NavDropdown.Item>
              </NavDropdown>
        </Container>
      </Navbar>
    );
  }
}
