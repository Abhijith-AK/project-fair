import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='d-flex flex-column  justify-content-center mt-5 shadow w-100' style={{
          width: "100%",
          height: "300px"
    }}>
         <div className='footer d-flex justify-content-evenly '>
              <div style={{ height: '300px' }} className='mt-5 container w-100'>
                  <div className="d-flex justify-content-between">
                      {/* Intro */}
                      <div style={{ width: '400px' }}>
                          <h5><i className="fa-brands fa-docker me-2"></i>
                              Project Fair</h5>
                          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
                          <p>Code licensed MIT, docs CC BY 3.0.</p>
                          <p>Currently v5.3.3.</p>
                      </div>
                      {/* Links */}
                      <div className="d-flex flex-column">
                          <h5>Links</h5>
                          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                          <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                          <Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
                      </div>
                      {/* Guides */}
                      <div className="d-flex flex-column">
                          <h5>Guides</h5>
                          <a style={{ textDecoration: 'none', color: 'white' }} href="https://react.dev/" target='_blank'>React</a>
                          <a style={{ textDecoration: 'none', color: 'white' }} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
                          <a style={{ textDecoration: 'none', color: 'white' }} href="https://reactrouter.com/" target='_blank'>React Router</a>
                      </div>
                      {/* Contact */}
                      <div className="d-flex flex-column">
                          <h5>Contact</h5>
                          <div className="d-flex">
                              <input className='form-control me-2' type="email" name="" id="" placeholder='Enter your email here' />
                              <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
                          </div>
                          <div className="d-flex justify-content-between mt-3">
                              <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
                              <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
                              <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook"></i></a>
                              <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                              <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-github"></i></a>
                              <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-solid fa-phone"></i></a>
                          </div>
                      </div>
                  </div>
                  <p className='text-center'>Copyright &copy; 2024</p>
              </div>
         </div>
    </div>
  )
}

export default Footer