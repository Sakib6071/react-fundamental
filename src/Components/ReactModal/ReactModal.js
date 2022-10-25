import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {title, image, price, description} = props.product;
    return (
        <div>
            <>
      <Button className="btn btn-secondary m-1" variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <img data-aos="flip-left" className='w-50 p-2' src={image} alt="" />
          <Modal.Title className='ms-2'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-5'>{description.slice(0,100)}</Modal.Body>
        <Modal.Footer>
          {
          <div data-aos="zoom-in" data-aos-duration="1000" className='fs-4 text-success fw-bold'>Price : {price}$</div>
          /* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
        </div>
    );
};

export default ReactModal;