import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function NextPop() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Peringatan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Coming soon guys see you next time :=</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>tutup</Button>
        </Modal.Footer>
      </Modal>
      <a href="#go" className="btn btn-danger" onClick={handleShow}>
        explore
      </a>
    </>
  );
}

export default NextPop;
