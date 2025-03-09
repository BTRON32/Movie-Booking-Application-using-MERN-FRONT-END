import {useState} from 'react';
import './Signin.css';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signin(props) {

    const navigate=useNavigate()

   
    const url=import.meta.env.VITE_BACKEND_URL

  const [message,setMessage]=useState("")

  const handleEmailChange = (event) => {
    props.se(event.target.value);
  };

  const handlePasswordChange = (event) => {
    props.sp(event.target.value);
  };

  //create/send details--always post method

  function pleaseSignin()
  {
    //Logic to send email and password to the express application
    
      Axios.post(`${url}/signin`,{
        myEmail:props.e,
        myPassword:props.p
    })
    .then(function(result)
{
    if (result.data.message=="Login Successful!")
    {
        navigate("/movies")
    }else{
        navigate("/signin")
    }
    
})
  }

  function pleaseSignUp()
    {
      navigate("/signup")
    }

  return (
    <div className="signin-container">
  {/* <form> */}
    {message ? message : null}

      <h2 style={{fontWeight:800}}>Signin</h2>
    
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={handleEmailChange} id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" onChange={handlePasswordChange} id="password" name="password" required />
        </div>
        <button type="submit" onClick={pleaseSignin} className="signin-btn">Sign In</button>
        {/* <div style={{marginTop:"10px"}}>
              <h4>Don't have an account ? Click here to <button class='btn btn-primary' onClick={pleaseSignUp}>Sign up</button></h4>
              
              </div> */}
              <div style={{marginTop:"10px"}}>
              <h4>Don't have an account ? <a href='/signup' style={{color: "#007bff"}} onClick={pleaseSignUp}>Signup here</a></h4>
              
              </div>
              {/* </form> */}
    </div>
  );
}

export default Signin;

// preventDefault-form will automatically reload
