import React from "react";
import { FormularioApi } from "../components/FormularioApi/FormularioApi";
import Map from "../components/Map";
import { Col, Container, Row } from "react-bootstrap";

const Inicio = () => {
  return (
    <Container>
      <Row>
        <Col>
          <FormularioApi />
          <Map />
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;
