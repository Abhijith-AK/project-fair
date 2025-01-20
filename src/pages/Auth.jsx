import React, { useState } from 'react'
import loginImg from '../assets/loginImg.png'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Auth = ({ insideRegister }) => {
  const [inputData, setInputData] = useState({
    username: "", email: "", password: ""
  })
  console.log(inputData);

  const handleRegister = (e) => {
    e.preventDefault()
    if (inputData.email && inputData.username && inputData.password) {
      alert("make api call")
    } else {
      alert("Please fill the form!!")
    }
  }

  return (
    <div style={{ minHeight: "100vh", width: "100%" }}
      className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={loginImg} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h1 className='mt-2'>
                <i className="fa-brands fa-docker me-2"></i>
                Project Fair
              </h1>
              <h5 className='mt-2'>Sign {insideRegister ? 'Up' : 'In'} to your account</h5>
              <Form>
                {
                  insideRegister &&
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control onChange={e => setInputData({ ...inputData, username: e.target.value })} type="text" placeholder="Username" />
                  </FloatingLabel>
                }
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control onChange={e => setInputData({ ...inputData, email: e.target.value })} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control onChange={e => setInputData({ ...inputData, password: e.target.value })} type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                    <div className="mt-3">
                      <button onClick={handleRegister} className="btn btn-primary mb-2">Register</button>
                      <p>Already a user? Please click here to <Link to={'/Login'}>Login</Link></p>
                    </div>
                    :
                    <div className="mt-3">
                      <button className="btn btn-primary mb-2">Login</button>
                      <p>New user? Please click here to <Link to={'/Register'}>Register</Link></p>
                    </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth