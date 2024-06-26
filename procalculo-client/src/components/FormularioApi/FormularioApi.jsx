import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { JSONTree } from "react-json-tree";
import { Col, Row, Spinner } from "react-bootstrap";

export const FormularioApi = () => {
  const [tipoItem, setTipoItem] = useState("REOrthoTile");
  const [inputGte, setInputGte] = useState("2020-01-01");
  const [inputLte, setInputLte] = useState("2020-01-31");
  const [features, setFeatures] = useState();
  const [mensajeOutput, setMensajeOutput] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeItem = (e) => {
    setTipoItem(e.target.value);
  };

  const handleChangeGte = (e) => {
    setInputGte(e.target.value);
  };

  const handleChangeLte = (e) => {
    setInputLte(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);

    fetch("https://api.planet.com/data/v1/quick-search", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("PLAK01d794b9ab18465c812adb77e14d2e76:")}`,
      },
      method: "POST",
      body: JSON.stringify({
        name: "Saved Search Example",

        item_types: [tipoItem],
        filter: {
          type: "AndFilter",
          config: [
            {
              type: "DateRangeFilter",
              field_name: "acquired",
              config: {
                gte: inputGte + "T00:00:00Z",
                lte: inputLte + "T00:00:00Z",
              },
            },
            {
              type: "AssetFilter",
              config: ["analytic_sr"],
            },
          ],
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data?.features) {
          setFeatures(data.features);

          if (data.features.length == 0) {
            setMensajeOutput("La respuesta está vacía");
          } else {
            setMensajeOutput("POST Api:");
          }
        }
        setIsLoading(false);
      });
  };

  return (
    <div className="card">
      <Card className="formularioApi">
        <Card.Body>
          <Card.Title>Ingresar información API</Card.Title>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm="4">
                <Form.Group className="mb-3" onChange={handleChangeItem}>
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select
                    aria-label="Seleccionar tipo de item"
                    value={tipoItem}
                  >
                    <option value="REOrthoTile">REOrthoTile</option>
                    <option value="PSScene">PSScene</option>
                    <option value="SkySatScene">SkySatScene</option>
                    <option value="SkySatCollect">SkySatCollect</option>
                    <option value="SkySatVideo">SkySatVideo</option>
                    <option value="Landsat8L1G">Landsat8L1G</option>
                    <option value="Sentinel2L1C">Sentinel2L1C</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col sm="4">
                <Form.Group className="mb-3" onChange={handleChangeGte}>
                  <Form.Label>GTE</Form.Label>
                  <Form.Control type="date" value={inputGte} />
                </Form.Group>
              </Col>

              <Col sm="4">
                <Form.Group className="mb-3" onChange={handleChangeLte}>
                  <Form.Label>LTE</Form.Label>
                  <Form.Control type="date" value={inputLte} />
                </Form.Group>
              </Col>

              <Button
                className="app-btn"
                variant="primary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Enviar"
                )}
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <div>
        <p>{mensajeOutput}</p>
        {features && <JSONTree data={features} hideRoot collectionLimit={20} />}
      </div>
    </div>
  );
};
