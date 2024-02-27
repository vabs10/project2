import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  AlertHeading,
} from "react-bootstrap";

const ProfileF = () => {
  return (
    <div
      className="d-flex align-items-start justify-content-center"
      style={{ height: "650px" }}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        // style={{ minHeight: "10vh" }}
      >
        <Row>
          <Col>
            <Form.Label className="d-flex align-items-center justify-content-center p-1 text-muted">
              Step 1
            </Form.Label>
            <AlertHeading className="d-flex align-items-center justify-content-center p-3">
              Your Profile
            </AlertHeading>
            <Form.Label className="d-flex align-items-center justify-content-center p-1">
              Enter the login information for your account. You will
              <br /> be able to create additional users after registering.
            </Form.Label>
            <Form>
              <Form.Group className="p-2">
                <Row>
                  <Col xs={6}>
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Your First Name"
                    />
                  </Col>
                  <Col xs={6}>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Your Last Name"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="p-2">
                <Row>
                  <Col xs={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Input Your Email" />
                  </Col>
                  <Col xs={6}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Your Phone Number"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="p-2">
                <Row>
                  <Col xs={6}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="Password"
                      placeholder="Create Password"
                    />
                  </Col>
                  <Col xs={6}>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Confirm Your Password"
                    />
                  </Col>
                </Row>
              </Form.Group>

              {/* <Form.Group className="p-2 d-flex justify-content-between align-items-center">
                <button type="button" class="btn px-0 text-muted border-0">
                  &lt; Back
                </button>
                <div class="d-flex justify-content-center flex-grow-1">
                  <button class="btn btn-primary d-flex align-items-center justify-content-center">
                    <Link to="/2" style={{ color: "white" }}>
                      Next
                    </Link>
                  </button>
                </div>
              </Form.Group> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div> 
  );
};

export default ProfileF;
