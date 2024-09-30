import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { Floppy } from "react-bootstrap-icons";
function PopUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <Floppy className="mb-2"></Floppy>
        &nbsp; selesai
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>data person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          voluptatum alias rem mollitia maiores?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
           
            close
          </Button>
          <Button onClick={handleClose} variant="success">
            Save changes
            
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
