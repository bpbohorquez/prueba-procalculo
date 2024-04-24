import React from "react";
import LogInCard from "../components/LogInCard/LogInCard";
import { Col, Container, Row } from "react-bootstrap";

const LogInPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <LogInCard />
        </Col>
      </Row>
    </Container>
  );
};

export default LogInPage;
