import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export default class TotalBayar extends Component {
  render() {
    return (
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga : Rp 15.000
              <strong className="float-right mr-2"></strong>
            </h4>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                <strong>BAYAR</strong>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
