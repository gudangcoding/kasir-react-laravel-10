import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Kategori, Produk, Sukses, Transaksi, User } from "./pages";
import { NavbarComponents } from "./components";
import { Container } from "react-bootstrap";
function App() {
  return (
    <BrowserRouter>
      <NavbarComponents />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Kategori" element={<Kategori />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/Transaksi" element={<Transaksi />} />
          <Route path="/sukses" element={<Sukses />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
