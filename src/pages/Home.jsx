import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImg from '../assets/landingImg.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'

const Home = () => {
    const [allHomeProjects, setAllHomeProjects] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllHomeProjects()
    }, [])

    const getAllHomeProjects = async () => {
        try {
            const result = await getHomeProjectAPI()
            if (result.status == 200) {
                setAllHomeProjects(result.data)            
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleProjects = () => {
        if (sessionStorage.getItem("token")) {
            navigate("/projects")
        } else {
            alert("Please login to get full Access!!!")
        }
    }
  return (
      <>
          <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6">
                          <h1 style={{ fontSize: '80px' }}><i className="fa-brands fa-docker me-3"></i>Project Fair</h1>
                          <p style={{ textAlign: 'justify' }}> One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!! </p>
                          {
                              sessionStorage.getItem("token") ?
                                  <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
                                  :
                                  <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>
                          }
                      </div>
                      <div className="col-lg-6">
                          <img src={landingImg} alt="" className="img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
          <div className="mt-5 text-center">
              <h1 className="mb-5">Explore Our Projects</h1>
              <marquee behavior="" direction="">
                  <div className="d-flex">
                      {
                          allHomeProjects?.map(project => (
                              <div className="me-5">
                                  <ProjectCard displayData={project} />
                              </div>     
                          ))
                     }
                  </div>
              </marquee>
              <button onClick={handleProjects} className="btn btn-link mt-5">
                  CLICK HERE TO VIEW MORE PROJECTS....
              </button>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
              <h1>Our Testimonials</h1>
              <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
                  <Card style={{ width: '18rem' }}>
                      <Card.Body>
                          <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png" alt="" />
                              Max Miller
                          </Card.Title>
                          <Card.Text>
                              <div className='d-flex justify-content-center mb-1'>
                                  <i className="fa-solid fa-star text-warning"></i>
                                  <i className="fa-solid fa-star text-warning"></i>
                                  <i className="fa-solid fa-star text-warning"></i>
                                  <i className="fa-solid fa-star text-warning"></i>
                              </div>
                              <p style={{ textAlign: "justify" }}>
                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam assumenda fuga iure accusantium, id quod illo voluptate officiis tempore illum, esse, at ut. Corrupti ducimus esse iure id omnis fugit!
                              </p>
                          </Card.Text>

                      </Card.Body>
                  </Card>
              </div>
          </div>
      </>
  )
}

export default Home