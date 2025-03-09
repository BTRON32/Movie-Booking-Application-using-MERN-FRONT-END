import React from 'react'

function Home() {
  return (
    <>
        <h1 style={{textAlign:"center",fontSize:"40px",fontWeight:500,marginTop:"10px"}}>Welcome to Book My Movie!</h1>
        <h2 style={{fontSize:"35px",marginTop:"10px"}}>Watch latest and amazing movies in exclusive theatres near you</h2>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",marginTop:"10px"}}>
        <img style={{marginRight:"50px",width:"480px"}} src="/video-player.png" alt="" />
        <img style={{marginRight:"30px",width:"480px"}} src="/watching-a-movie.png" alt="" />
        <img style={{width:"480px"}} src="/theater.png" alt="" />
        </div>
        <h2 style={{marginTop:"30px",fontSize:"40px"}}>Enjoy and relive your movie experience</h2>

    </>
  )
}

export default Home