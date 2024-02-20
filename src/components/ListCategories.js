import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import axios from "axios";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kategoris: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "kategori")
      .then((res) => {
        this.setState({ kategoris: res.data });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  render() {
    const { kategoris } = this.state;
    return (
      <Col md={2} className="mt-3">
        <h4>
          <strong>Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
          {kategoris &&
            kategoris.map((kat) => (
              <ListGroup.Item  key={kat.id}>
                 <h5>
                  <Icon nama={kat.nama} /> {kat.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
