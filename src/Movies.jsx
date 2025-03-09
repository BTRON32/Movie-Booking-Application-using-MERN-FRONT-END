import React, { useState } from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'

function Movies(props) {

  //Welcome Mark(Username)--Signed user

  const navigate=useNavigate()


  const [movieDetails,setMovieDetails]=React.useState([])

  const url=import.meta.env.VITE_BACKEND_URL
   
    Axios.get(`${url}/fetch/all/movies`)
    .then(function(result)
{
    setMovieDetails(result.data)//[{},{},{}]
    
})
    .catch(function(error)
{
    console.log(error)
    
})


function displayMovieDetails(details)
{
  props.details(details)
  //Logic to display particular movie details
  navigate("/moviedetails")
}
    
  return (
    <>
   {props.e ? <h2 style={{textAlign:"center", fontWeight:700, fontFamily:"sans-serig",fontSize:"18px"}}>Welcome! {props.e}, you are successfully logged in!</h2> : null}

    <div style={{display:"flex", justifyContent:"space-evenly",marginTop:"20px",flexWrap:"wrap"}}>
    {
        movieDetails.map(function(i)
        {
          return <div className="card" style={{width: "20rem",margin:"10px"}}>
            <img src={i.image_url} onClick={function()
            {
              displayMovieDetails(i)
            }
            } style={{height:"200px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title" style={{fontWeight:600,fontSize:"20px"}}>{i.movie_name}</h5>
            <h5 className="card-title" style={{fontWeight:200,fontSize:"15px"}}>{i.genre}</h5>
           
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        })
    }
    </div>
    </>
    )
}

export default Movies

//react-router-dom is used for navigation/routing purpose

//Protected routes assignment

//build-a 3 file that will be created for the entire project

//Component
//HTML,JS,CSS
//Compress-->3 files
// HTML,CSS AND JS