import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="btn shadow" onClick={handleShow}>
        <Card.Img height={'200px'} variant="top" src="https://project-fair-server-june24.onrender.com/uploads/image-1730886279716-calculator.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title> 
        </Card.Body>
      </Card> 

      <Modal
        size='lg'
        show={show}
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://project-fair-server-june24.onrender.com/uploads/image-1730886279716-calculator.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Project Title</h3>
              <h6 className="fw-bolder">
                Languages used: <span className="text-danger">HTML,CSS</span>
              </h6>
              <p style={{ textAlign: "justify" }}>
                <span className='fw-bolder'>Project Overview: </span>
                A simple calculator app for basic arithmetice operation built with HTML and JS
              </p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href="" target='_blank' className='btn btn-secondary'><i className="fa-brands fa-github"></i></a>
            <a href="" target='_blank' className='btn btn-secondary ms-2'><i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard