import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import Test from "../assets/Test.svg";
import NextPop from "./NextPop";
function Depan() {
  return (
    <>
      <div className="container-lg">
        <Row className=" justify-content-center align-items-center">
          <Col md={5} className="text-center">
            <h1>
              <div className="display-2">Aute ipsum </div>
              <div className="text-muted display-5">Lorem ipsum dolor </div>
            </h1>
            <p className="my-4 text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              cum, officia, at, quia facilis officiis non sed .
            </p>
            <NextPop />
          </Col>
          <Col md={5} className="text-center">
            <img src={Test} className="img-fluid" alt="gambar not render" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Depan;
