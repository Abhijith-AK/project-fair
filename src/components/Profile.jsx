import React, { useEffect, useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import profileImg from '../assets/profileImg.jpg'
import SERVERURL from '../services/serverURL';
import { updateUserAPI } from '../services/allAPI';

const Profile = () => {
  const [preview, setPreview] = useState("")
  const [existingProfile, setExistingProfile] = useState("")
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: "", github: "", linkedin: "", profilepic: ""
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUserDetails({
      ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin
    })
    setExistingProfile(user.profilepic)
  }, [open]);

  useEffect(() => {
    if (userDetails.profilepic) {
      setPreview(URL.createObjectURL(userDetails.profilepic))
    } else {
      setPreview("")
    }
  }, [userDetails.profilepic]);

  const handleUpdateProfile = async () => {
    const { username, email, password, github, linkedin, profilepic } = userDetails
    if (github && linkedin) {
      const reqBody = new FormData()
      reqBody.append("username", username);
      reqBody.append("email", email);
      reqBody.append("password", password);
      reqBody.append("github", github);
      reqBody.append("linkedin", linkedin);
      preview ? reqBody.append("profilepic", profilepic) : reqBody.append("profilepic", existingProfile);
      const token = sessionStorage.getItem('token')
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        // make api call
        try {
          const result = await updateUserAPI(reqBody, reqHeader);
          if (result.status == 200) {
            alert("User profile updated successfully")
            sessionStorage.setItem("user", JSON.stringify(result.data))
            setOpen(!open)
          }
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      alert("Please fill the form completely");
    }
  }

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 className="text-warning">Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn text-warning'><i className="fa-solid fa-angle-down"></i></button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text" className='row container-fluid align-items-center justify-content-center shadow p-2 rounded'>
          <label className='text-center'>
            <input onChange={e => setUserDetails({ ...userDetails, profilepic: e.target.files[0] })} type="file" style={{ display: "none" }} />
            {
              existingProfile == "" ?
                <img height={'150px'} width={'150px'} className='rounded-circle' src={preview ? preview : profileImg} alt="" />
                :
                <img height={'150px'} width={'150px'} className='rounded-circle' src={preview ? preview : `${SERVERURL}/uploads/${existingProfile}`} alt="" />
            }
          </label>
          <div className="mb-2 w-100">
            <input value={userDetails.github} onChange={e => setUserDetails({ ...userDetails, github: e.target.value })} type="text" name="" id="" placeholder='USER GITHUB PROFILE LINK' className="form-control" />
          </div>
          <div className="mb-2 w-100">
            <input value={userDetails.linkedin} onChange={e => setUserDetails({ ...userDetails, linkedin: e.target.value })} type="text" name="" id="" placeholder='USER LINKEDIN PROFILE LINK' className="form-control" />
          </div>
          <div className="d-grid w-100">
            <button onClick={handleUpdateProfile} className='btn btn-warning'>Update Profile</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile