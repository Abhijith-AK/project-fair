import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/uploadImg.png'

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-edit"></i></button>
      <Modal
        centered
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{ display: "none" }} />
                <img height={'200px'} className='img-fluid' src={uploadImg} alt="" />
              </label>
              <div className="text-warning fw-bolder my-2">*Upload Only the following file types (jpeg, jpg, png) here!!!</div>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" name="" id="" placeholder='Project Title' className="form-control" />
              </div>
              <div className="mb-2">
                <input type="text" name="" id="" placeholder='Languages used in project' className="form-control" />
              </div>
              <div className="mb-2">
                <input type="text" name="" id="" placeholder='Project Overview' className="form-control" />
              </div>
              <div className="mb-2">
                <input type="text" name="" id="" placeholder='Project Github Link' className="form-control" />
              </div>
              <div className="mb-2">
                <input type="text" name="" id="" placeholder='Project Website Link' className="form-control" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit