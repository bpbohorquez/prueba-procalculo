import React from "react";
import SignUpCard from "../components/SignUpCard/SignUpCard";
import { Col, Container, Row } from "react-bootstrap";

const SignUpPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SignUpCard />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
