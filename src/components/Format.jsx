import React from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { Floppy, Person } from "react-bootstrap-icons";
import PopUp from "./PopUp";
function Format(props) {
  return (
    <>
      <div className="container-lg">
        <div className="text-center">
          <h1>Lorem.ipsum</h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form className="mb-5">
              <Form.Label>alamat email</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" />

              <Form.Label>nama</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <Person />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="nama"></Form.Control>
              </InputGroup>
              <Form.Label>pilihan anda</Form.Label>
              <Form.Select>
                <option value="satu">satu</option>
                <option value="dua">dua</option>
                <option value="satu">tiga</option>
              </Form.Select>
              <Form.Label>isikan pengalaman anda</Form.Label>
              <Form.Control type="text" as="textarea"></Form.Control>
              <PopUp/>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Format;
