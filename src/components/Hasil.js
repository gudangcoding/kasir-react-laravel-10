import React, { Component } from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { numberWithCommas } from "../utils/utils";

export default class Hasil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isikeranjang: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "keranjang")
      .then((res) => {
        this.setState({ isikeranjang: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.isikeranjang !== prevState.isikeranjang) {
      axios
        .get(API_URL + "keranjang")
        .then((res) => {
          this.setState({ isikeranjang: res.data });
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }
  

  render() {
    const { isikeranjang } = this.state;
    return (
      <Col md={3} className="mt-3">
        <h4>
          <strong>Transaksi</strong>
        </h4>
        <hr />
        {isikeranjang.length !== 0 && (
        <Card className="overflow-auto hasil">
          <ListGroup variant="flush">
            {isikeranjang &&
              isikeranjang.map((keranjang) => (
                <ListGroup.Item key={keranjang.id}>
                  <Row>
                    <Col xs={2}>
                      <h4>
                        <Badge pill variant="success">
                          1
                        </Badge>
                      </h4>
                    </Col>
                    <Col>
                      <h5>{keranjang.product.nama}</h5>
                      <p>
                        Rp. {numberWithCommas(keranjang.product.harga)} x{" "}
                        {keranjang.jumlah}
                      </p>
                    </Col>
                    <Col>
                      <strong className="float-right">
                        Rp. {numberWithCommas(keranjang.total_harga)}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card>
        )}
      </Col>
    );
  }
}
