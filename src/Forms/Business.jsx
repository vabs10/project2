import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  AlertHeading,
} from "react-bootstrap";
import { CheckLg, XLg } from "react-bootstrap-icons";

const Business = () => {
  return (
    <div
      className="d-flex align-items-start justify-content-center"
      style={{ maxWidth: "580px", overflow: "hidden" }} 
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ width: "100%" }}
      >
        <Row>
          <Col>
            <Form.Label className="text-muted d-flex align-items-center justify-content-center ">Step 2</Form.Label>
            <AlertHeading className="text-center mb-1">Business Information</AlertHeading>
            <Form.Label className="text-center mb-1">Please, enter information about your company</Form.Label> 
            <Form className="mb-1"> 
              <Form.Label style={{ color: "blue" }}>GENERAL INFORMATION</Form.Label>
              <Form.Group>
                <Row>
                  <Col xs={6}>
                    <Form.Label>Brand name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Your Brand Name"
                    />
                  </Col>
                  <Col xs={6}>
                    <Form.Label>Brand Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Select Type of Your Brand"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col xs={6}>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Your Street Address"
                    />
                  </Col>
                  <Col xs={6}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Input City" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col xs={6}>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="Number" placeholder="Input Zip Code" />
                  </Col>
                  <Col xs={6}>
                    <Form.Label>Tax ID Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Tax ID Number"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
            <Form.Label className="text-center mb-1" style={{ color: "blue" }}>DOCUMENTS</Form.Label> 
            <Form.Label className="mb-1">
              Once the following documents are signed, you'll be ready to get
              started
            </Form.Label> 
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                Electronically sign the agreement(s){" "}
                <span style={{ color: "green" }}>
                  <CheckLg />
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Non adult beverage Kroger market supplier waiver and release
                <span className="badge bg-primary rounded-pill">
                  <XLg />
                </span>
              </li>
            </ul>
            <Form.Label className="text-center mb-1" style={{ color: "blue" }}>COI PDF UPLOAD</Form.Label> 
            <Form.Label className="mb-1">
              Once the following documents are signed, you'll be ready to get
              started
            </Form.Label> 
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Electronically sign the agreement(s){" "}
                <span style={{ color: "green" }}>
                  <CheckLg />
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Business;
