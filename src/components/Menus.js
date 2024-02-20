import React, { Component } from "react";
import { Card, Col, Form, Pagination, Row } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { numberWithCommas } from "../utils/utils";

export default class Menus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      searchValue: "",
      currentPage: 1, // 1. State untuk Pagination
      menusPerPage: 6, // Menentukan jumlah item per halaman
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "produk")
      .then((res) => {
        this.setState({ menus: res.data });
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }

  masukKeranjang = (isi) => {
    console.log(isi);

    // Code untuk masuk ke keranjang
  };

  handleSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  // 2. Fungsi untuk Mengatur Halaman
  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { menus, searchValue, currentPage, menusPerPage } = this.state;

    // Filter menus based on search query
    const filteredMenus = menus.filter((menu) =>
      menu.nama.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Logic for pagination
    const indexOfLastMenu = currentPage * menusPerPage;
    const indexOfFirstMenu = indexOfLastMenu - menusPerPage;
    const currentMenus = filteredMenus.slice(indexOfFirstMenu, indexOfLastMenu);

    // Render menus
    const renderMenus = currentMenus.map((menu) => (
      <Col
        md={4}
        xs={6}
        className="mb-4"
        key={menu.id}
        onClick={() => this.masukKeranjang(menu)}
      >
        <Card style={{ width: "16rem" }}>
          <Card.Img
            variant="top"
            src={
              "assets/images/" +
              menu.category.nama.toLowerCase() +
              "/" +
              menu.gambar
            }
          />
          <Card.Body>
            <Card.Title>{menu.nama}</Card.Title>
            <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredMenus.length / menusPerPage); i++) {
      pageNumbers.push(i);
    }

    // Render pagination
    const renderPageNumbers = pageNumbers.map((number) => (
      <Pagination.Item
        key={number}
        id={number}
        onClick={this.handleClick}
        active={number === currentPage}
      >
        {number}
      </Pagination.Item>
    ));

    return (
      <Col className="mt-3">
        <h4>
          <strong>Daftar Produk</strong>
        </h4>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Cari Produk"
            value={searchValue}
            onChange={this.handleSearchChange}
          />
        </Form>
        <hr />
        <Row className="overflow-auto menu">{renderMenus}</Row>
        {/* Render pagination */}
        <Pagination className="mt-3">{renderPageNumbers}</Pagination>
      </Col>
    );
  }
}
