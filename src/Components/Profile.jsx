import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  AlertHeading,
  ListGroup,
} from "react-bootstrap";
import {
  Icon1CircleFill,
  Icon2CircleFill,
  Icon3CircleFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ProfileF from "../Forms/Profile";
import Business from "../Forms/Business";
import Additional from "../Forms/Additional";

const Profile = () => {
  const [selectedComponent, setSelectedComponent] = useState("tm");

  const handleItemClick = (eventKey) => {
    setSelectedComponent(eventKey);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    const sequence = ["tm", "ff", "nb"];
    const currentIndex = sequence.findIndex(
      (item) => item === selectedComponent
    );
    const nextIndex = (currentIndex + 1) % sequence.length;
    setSelectedComponent(sequence[nextIndex]);
  };

  const handlePreviousClick = () => {
    const sequence = ["tm", "ff", "nb"];
    const currentIndex = sequence.findIndex(
      (item) => item === selectedComponent
    );
    const previousIndex =
      (currentIndex - 1 + sequence.length) % sequence.length;
    setSelectedComponent(sequence[previousIndex]);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "tm":
        return <ProfileF />;
      case "ff":
        return <Business />;
      case "nb":
        return <Additional />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div style={{ width: "800px" }}>
        <Container>
          <Row>
            <Col xs={10} className="text-center">
              {" "}
              {/* Centered for xs and left-aligned for md and above */}
              <div className="p-3">
                <AlertHeading className="d-flex align-items-center justify-content-center">
                  Create New Account
                </AlertHeading>
              </div>
            </Col>
            <Col xs={2} className="text-md-right">
              {" "}
              {/* Right-aligned for md and above */}
              <div className="p-3">
                <Form.Label className="d-flex align-items-center justify-content-md-end">
                  <Link
                    to="/contact"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    {" "}
                    {/* Added btn-sm class for smaller size */}
                    Contact Us
                  </Link>
                </Form.Label>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col>
              <Form noValidate>
                <Form.Group className="d-flex align-items-center justify-content-center p-2">
                  <ListGroup horizontal>
                    <ListGroup.Item
                      action
                      active={selectedComponent === "tm"}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick("tm");
                      }}
                      className="d-flex align-items-center justify-content-center flex-grow-1 flex-shrink-1 rounded-pill"
                      style={{ minWidth: "250px" }}
                    >
                      <Icon1CircleFill
                        className="p-1"
                        style={{ fontSize: "25px" }}
                      />
                      Your Profile
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      active={selectedComponent === "ff"}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick("ff");
                      }}
                      className="d-flex align-items-center justify-content-center flex-grow-1 flex-shrink-1 rounded-pill"
                      style={{ minWidth: "250px" }}
                    >
                      <Icon2CircleFill
                        className="p-1"
                        style={{ fontSize: "25px" }}
                      />
                      Business Information
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      active={selectedComponent === "nb"}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick("nb");
                      }}
                      className="d-flex align-items-center justify-content-center flex-grow-1 flex-shrink-1 rounded-pill"
                      style={{ minWidth: "250px" }}
                    >
                      <Icon3CircleFill
                        className="p-1"
                        style={{ fontSize: "25px" }}
                      />
                      Additional Users
                    </ListGroup.Item>
                  </ListGroup>
                </Form.Group>
                <div
                  className="d-flex align-items-start justify-content-center"
                  style={{ height: "600px" }}
                >
                  {renderComponent()}
                </div>
                <Form.Group className="p-2 d-flex justify-content-between align-items-center">
                  <Link to="/login" className="btn px-0 text-muted border-0">
                    &lt; Back to Login
                  </Link>
                  {selectedComponent !== "tm" && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handlePreviousClick}
                    >
                      &lt; Previous Step
                    </button>
                  )}
                  <button className="btn btn-primary" onClick={handleNextClick}>
                    Next Step &gt;
                  </button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
