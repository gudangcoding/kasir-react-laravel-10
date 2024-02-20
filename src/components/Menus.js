import React, { Component } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import Swal from "sweetalert2";
import { numberWithCommas } from "../utils/utils";


export default class Menus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      searchValue: "", // 1. State untuk Pencarian
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
    
    axios
      .get(API_URL + "keranjang?product.id=" + isi.id)
      .then((res) => {
        if (res.data.length === 0) {
          const cart = {
            jumlah: 1,
            total_harga: isi.harga,
            product: isi,
          };

          axios
            .post(API_URL + "keranjang", cart)
            .then((res) => {
              Swal.fire({
                title: "Sukses Masuk Keranjang",
                text:  cart.product.nama+" Sukses Masuk Keranjang " ,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        } else {
          const cart = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + isi.harga,
            product: isi,
          };

          axios
            .put(API_URL + "keranjang/" + res.data[0].id, cart)
            .then((res) => {
              Swal.fire({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + cart.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  handleSearchChange = (event) => {
    // 2. Fungsi Pencarian
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const { menus, searchValue } = this.state;
    // 3. Penanganan Pencarian
    const filteredMenus = menus.filter((menu) =>
      menu.nama.toLowerCase().includes(searchValue.toLowerCase())
    );
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
            value={searchValue} // Menyambungkan nilai pencarian dengan input
            onChange={this.handleSearchChange} // Menangani perubahan nilai pencarian
          />
        </Form>
        <hr />
        <Row className="overflow-auto menu">
          {filteredMenus.map((menu) => (
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
          ))}
        </Row>
      </Col>
    );
  }
}
