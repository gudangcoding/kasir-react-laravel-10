
import React, { Component } from "react";
import { Row} from "react-bootstrap";
import { Hasil, ListCategories, Menus } from "../components";

export default class Home extends Component {
  render() {
    return (
      <div className="mt-3">
        <Row>
          <ListCategories />
          <Menus />
          <Hasil />
        </Row>
      </div>
    );
  }
}
