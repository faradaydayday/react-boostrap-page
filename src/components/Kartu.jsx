import React from "react";
import { Row, Col, Card } from "react-bootstrap";
function Kartu() {
  return (
    <>
      <div className="container-lg">
        <div className="text-center">
          <h2>price list</h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tenetur molestias ipsum!
          </p>
        </div>
        <Row className="my-5 align-items-center justify-content-center g-2">
          <Col sm={8} lg={3}>
            <Card className="border-8">
              <Card.Body className="text-center py-4">
                <Card.Title>Lorem, ipsum.</Card.Title>
                <Card.Subtitle>Lorem ipsum dolor sit amet.</Card.Subtitle>
                <p className="display-5 my-4 text-success fw-bold">Rp.60000</p>
                <Card.Text className="mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Excepturi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8} lg={4}>
            <Card className="border-8 ">
              <Card.Body className="text-center py-4">
                <Card.Title>Lorem, ipsum.</Card.Title>
                <Card.Subtitle>Lorem ipsum dolor sit amet.</Card.Subtitle>
                <p className="display-5 my-4 text-success fw-bold">Rp.10000</p>
                <Card.Text className="mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Excepturi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8} lg={3}>
            <Card className="border-8">
              <Card.Body className="text-center py-4">
                <Card.Title>Lorem, ipsum.</Card.Title>
                <Card.Subtitle>Lorem ipsum dolor sit amet.</Card.Subtitle>
                <p className="display-5 my-4 text-success fw-bold">Rp.30000</p>
                <Card.Text className="mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Excepturi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Kartu;
