import React from 'react'

function BookingHistory(props) {

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

//   window.onbeforeunload = function () {
//     window.scrollTo(0,0);
// };
  
// const scrollToTop = () => {
//   window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//   });
// };
// const ref = React.useRef(null)
// const scrollToElement = () => {
//   ref.current?.scrollIntoView({ behavior: 'smooth' });
// };

// React.useEffect(() => {
//   scrollToElement();
// }, []);

  return (
    <div style={{maxWidth:"2000px",minWidth:"300px"}}>
        <h1 style={{textAlign:"center", fontSize:"40px"}}>Welcome to Booking History!</h1>
        <h1 style={{textAlign:"left",color: "#007bff",fontSize:"25px"}}>You recently purchased tickets for : </h1>
   <div style={{border:"1px solid black"}}>
  
    <h5 style={{marginTop:"15px", fontSize:"25px",marginBottom:"10px",textAlign:"center"}} class="card-title">{props.info.movie_name}</h5>
   
    <div style={{display:"flex"}}>
    <img style={{height:"200px",width:"200px"}} src={props.info.image_url}  />
                            <p style={{marginTop:"15px",fontSize:"22px",marginLeft:"10px"}} class="card-text">{props.info.description}</p>
                            </div>
                            <h4 style={{marginTop:"15px",fontWeight:600,fontSize:"17px"}} class="card-title">{props.info.genre}</h4>
                            <h4 style={{marginTop:"15px",fontWeight:600,fontSize:"17px"}} class="card-title">{props.info.censor}</h4>
                            <h4 style={{marginTop:"15px",fontWeight:600,fontSize:"17px"}} class="card-title">{props.info.director}</h4>
    </div>
    <h1 style={{textAlign:"center", fontSize:"40px"}}>Enjoy your movie!</h1>

    </div>
    
  )
}

export default BookingHistory