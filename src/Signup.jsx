import React from 'react'
import './Signup.css'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'

function Signup() {

  const navigate=useNavigate()

    const [username,setUsername]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const [confirmPassword,setConfirmPassword]=React.useState("")
    const url=import.meta.env.VITE_BACKEND_URL
    // const [message,setMessage]=React.useState("")

    function collectUsername(event)
    {
        setUsername(event.target.value)
    }

    function collectEmail(event)
    {
        setEmail(event.target.value)
    }

    function collectPassword(event)
    {
        setPassword(event.target.value)
    }

    function collectConfirmPassword(event)
    {
        setConfirmPassword(event.target.value)
    }


    function sendSignupData()
    {
        //Details for creating purpose for a post method, always send the data in object format
        //Logic to send all 4 details to backend(express app)-->Create that data inside the DB(mongodb)
        
          Axios.post(`${url}/signup`,{
            myUsername:username,
            myEmail:email,
            myPassword:password,
            myConfirmPassword:confirmPassword
        })
        .then(function(output)
    {
        // setMessage(output.data.message)
        if(output.data.message=="Registration Successful!")
        {
          navigate("/signin")
        }
        else{
          navigate("/signup")
        }
        
    })

    }

    function pleaseSignIn()
    {
      navigate("/signin")
    }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">

          {/* <h2>{message ? message: null}</h2> */}
          {/* style={{backgroundColor:"#0056b3",borderColor:"#004085",color:"white",fontSize:"30px"}} */}
            <h3 className="card-title text-center mb-4">Sign Up</h3>
            
            
              <div className="form-group mb-3">
                <label>Enter Username:</label>
                <input type="text" name="username" className="form-control" placeholder="Username" onChange={collectUsername} />
              </div>
              <div className="form-group mb-3">
                <label>Enter Email:</label>
                <input type="email" name="email" className="form-control" placeholder="Email" onChange={collectEmail} />
              </div>
              <div className="form-group mb-3">
                <label>Enter Password:</label>
                <input type="password" name="password" className="form-control" placeholder="Password" onChange={collectPassword} />
              </div>
              <div className="form-group mb-4">
                <label>Confirm Password:</label>
                <input type="password" name="confirm-password" className="form-control" placeholder="Confirm Password" onChange={collectConfirmPassword} />
              </div>
              <button type="submit" onClick={sendSignupData} className="btn btn-primary btn-block">Sign Up</button>
              <div style={{marginTop:"10px"}}>
              {/* <h4>Already have an account ? Click here to <button class='btn btn-primary' onClick={pleaseSignIn}>Sign in</button></h4> */}
              <h4>Already have an account ? <a style={{color:"#007bff"}} href='/signin' onClick={pleaseSignIn}>Signin here</a></h4>
              
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
