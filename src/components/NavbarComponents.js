import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavbarComponents extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Kasir Apss</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
               <Link to='/'> Home</Link>
              </Nav.Link>
              <NavDropdown title="Data Master" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/User"  style={{ color: '#000000' }}>User</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/Kategori'  style={{ color: '#000000' }}>Kategori</Link>
                </NavDropdown.Item>
                <NavDropdown.Item> 
                  <Link to='Produk'  style={{ color: '#000000' }}>Produk</Link> 
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="text-white">
                <Link to="/Transaksi" style={{ color: '#ffffff' }}>Transaksi</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown title="Profil" id="basic-nav-dropdown" className="d-flex text-white" >
                <NavDropdown.Item>
                  <Link to='/Kategori'  style={{ color: '#000000' }}>Ganti Password</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/User"  style={{ color: '#000000' }}>Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
        </Container>
      </Navbar>
    );
  }
}
