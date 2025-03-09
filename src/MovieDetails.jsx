import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./MovieDetails.css"

function MovieDetails(props) {

    const navigate=useNavigate()
    // console.log(props.info)

    function goToLocationAndTheatre()
    {
        navigate("/locationandtheatre")
    }
    
    //if width<557{
    // }
    // else{
    //     //
    // }

    return (
        // <div className='main-card' style={{alignItems:"center", justifyContent:"center",marginTop:"20px",marginLeft:"350px"}}>
        //     <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div className='main-card' style={{alignItems:"center", justifyContent:"center",marginTop:"20px"}}>
            <div class="card mb-3" style={{ maxWidth: "1400px",minWidth:"300px",justifyContent:"center",alignItems:"center" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={props.info.image_url} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 style={{marginTop:"15px", fontSize:"25px"}} class="card-title">{props.info.movie_name}</h5>
                            <p style={{marginTop:"15px",fontSize:"22px"}} class="card-text">{props.info.description}</p>
                            <h4 style={{marginTop:"15px",fontWeight:600,fontSize:"17px"}} class="card-title">{props.info.genre}</h4>
                            <h4 style={{marginTop:"15px",fontWeight:600,fontSize:"17px"}} class="card-title">{props.info.censor}</h4>
                            <h4 style={{marginTop:"15px",fontWeight:600,fontSize:"17px"}} class="card-title">{props.info.director}</h4>
                            {
                                props.info.cast.map(function (i) {

                                    //use return inside map function

                                    return <div class="card" style={{width: "18rem"}}>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{i}</li>
                                        </ul>
                                    </div>
                                    
                                })
                            }
                            <button className='btn btn-danger' onClick={goToLocationAndTheatre} style={{marginTop:"20px"}}>Book Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default MovieDetails


// --------------------------------chat gpt-----------------------------

// import React from 'react';
// import './MovieDetails.css'; // Import your external CSS

// function MovieDetails(props) {
//     console.log(props.info);

//     return (
//         <div className="card mb-3 movie-card">
//             <div className="row g-0">
//                 <div className="col-md-4">
//                     <img src={props.info.image_url} className="img-fluid rounded-start movie-image" alt={props.info.movie_name} />
//                 </div>
//                 <div className="col-md-8">
//                     <div className="card-body">
//                         <h3 className="card-title">{props.info.movie_name}</h3>
//                         <h5 className="text-muted">{props.info.genre}</h5>
//                         <h6 className="text-muted">{props.info.censor}</h6>
//                         <p className="card-text">{props.info.description}</p>
//                         <h6 className="text-muted">Director: {props.info.director}</h6>
//                         <h6 className="text-muted">Cast:</h6>
//                         <ul className="list-group list-group-flush">
//                             {props.info.cast.map((actor, index) => (
//                                 <li key={index} className="list-group-item">
//                                     {actor}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MovieDetails;


// ------------------------------------------

//Some Locations
//Each location, we will have some theatres
//Each theatre will have some timings
//In each timings, we will have seats


