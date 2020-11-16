import React from "react";
import "./Contact.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row } from "react-bootstrap";

const Contact = () => {
  // 기능 구현 로직
  return (
    <div id="contact">
      <div class="Contact">
        <h1>Contact</h1>
      </div>
      <div class="Contact02">
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="sksgur3217@gmail.com"
              />
            </Col>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Github:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="https://github.com/ko7452"
              />
            </Col>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Phone:
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue="010-9800-5226" />
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
