import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";
import hp from "../assets/hp.png"
function Akordion() {
  return (
    <>
      <div className="container-md">
        <div className="text-center">
          <h2>Lorem, ipsum dolor.</h2>
          <p className="text-muted">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <Row className="my-5 g-5 justify-content-around align-items-center">
          <Col md={6} lg={4}>
             <img src={hp} width="300px" alt="" />
          </Col>
          <Col lg={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                 <Accordion.Header>
                    Lorem ipsum dolor sit.
                 </Accordion.Header>
                 <Accordion.Body>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi vitae, impedit maxime similique omnis accusamus.
                 </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                 <Accordion.Header>
                    Lorem ipsum dolor sit.
                 </Accordion.Header>
                 <Accordion.Body>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi vitae, impedit maxime similique omnis accusamus.
                 </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                 <Accordion.Header>
                    Lorem ipsum dolor sit.
                 </Accordion.Header>
                 <Accordion.Body>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Akordion;
