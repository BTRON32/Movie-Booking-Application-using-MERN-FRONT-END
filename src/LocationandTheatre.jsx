// import React, { useEffect } from 'react'
// import Axios from "axios"

// function LocationandTheatre() {

//   const [locationsandtheatresinfo,setLocationsAndTheatresInfo]=React.useState([])

//   useEffect(function()
// {
//   Axios.get("http://localhost:9000/locations")
//   .then(function(output)
// {
//   setLocationsAndTheatresInfo(output.data.info)

// })
// },[])

//   return (

//     <div>
//        {
//         <select>
//         {
//         locationsandtheatresinfo.map(function(i)
//         {
//           return <option>{i.location}</option>
//         })
//         }
//         </select>

//         }
//     </div>

//   )
// }

// export default LocationandTheatre


// ----------------------------

{/* <div className="container mt-3">
    <div className="row">
    <div className="col-12 text-end">
    </div>
      <select className="form-control w-auto d-inline-block">
        {locationsandtheatresinfo.map(function (i) {
          return <option key={i.location}>{i.location}</option>;
        })}
      </select>
    </div>
    </div>
    </div> */}

// ------------------------------------

//     import React, { useEffect } from 'react'
// import Axios from "axios"

// function LocationandTheatre() {

//   const [locationsandtheatresinfo, setLocationsAndTheatresInfo] = React.useState([])

//   useEffect(() => {
//     Axios.get("http://localhost:9000/locations")
//       .then((output) => {
//         setLocationsAndTheatresInfo(output.data.info)
//       })
//   }, [])

//   return (
//     <div className="d-flex justify-content-end p-3">
//       <select className="form-control w-auto">
//         {
//           locationsandtheatresinfo.map((i, index) => (
//             <option key={index}>{i.location}</option>
//           ))
//         }
//       </select>
//     </div>
//   )
// }

// export default LocationandTheatre


// --------------------------------------


// import React, { useEffect } from 'react';
// import Axios from "axios";

// function LocationandTheatre() {

//   const [locationsandtheatresinfo, setLocationsAndTheatresInfo] = React.useState([]);

//   const [locationName, setLocationName] = React.useState("")

//   useEffect(function () {
//     Axios.get("http://localhost:9000/locations")
//       .then(function (output) {
//         setLocationsAndTheatresInfo(output.data.info);
//       });
//   }, []);

//   function collectLocation(event) {
//     setLocationName(event.target.value)

//   }

//   return (
//     // d-flex justify-content-end p-3
//     <>
//       {/* <div className='row'> */}
//       <div className="d-flex justify-content-end p-3"> {/* Flex container for right alignment */}
//         <div className="dropdown">
//           <select onChange={collectLocation} className="form-select w-auto d-inline-block" style={{ appearance: 'none', paddingRight: '2rem', background: 'url(data:image/svg+xml;base64,PHN2ZyB...down_arrow_svg...) no-repeat right center', backgroundSize: '16px 16px' }}>
//             {locationsandtheatresinfo.map(function (i, index) {
//               return <option value={i.location}>{i.location}</option>;
//             })}
//           </select>
//         </div>
//         {/* </div> */}
//       </div>

//       {/* locationname=="Mumbai" */}
//       {/* Theatre Details */}

//       <div style={{marginTop:"20px"}}>
//       {
//         locationsandtheatresinfo.map(function (j) {
//           if (locationName == j.location) {
//             return j.theatres.map(function (k) {
//               return <div class="card" style={{width: "18rem"}}>
//                 <ul class="list-group list-group-flush">
//                   <li class="list-group-item">{k.theatreName}</li>
//                   {
//                      k.showTimes.map(function(l)
//                   {
//                     return <li class="list-group-item">{l}</li>
//                   })
//                   }
//                 </ul>
//               </div>
//             })
//           }
//         })
//       }
//       </div>
//     </>
//   );
// }

// export default LocationandTheatre;


// ---------------------------------------

// import React, { useEffect } from 'react';
// import Axios from "axios";

// function LocationandTheatre() {
//   const [locationsandtheatresinfo, setLocationsAndTheatresInfo] = React.useState([]);
//   const [locationName, setLocationName] = React.useState("");

//   useEffect(function () {
//     Axios.get("http://localhost:9000/locations")
//       .then(function (output) {
//         setLocationsAndTheatresInfo(output.data.info);
//       });
//   }, []);

//   function collectLocation(event) {
//     setLocationName(event.target.value);
//   }

//   return (
//     <>
//       <div className="d-flex justify-content-end p-3">
//         <div className="dropdown">
//           <select onChange={collectLocation} className="form-select w-auto d-inline-block" style={{ appearance: 'none', paddingRight: '2rem', background: 'url(data:image/svg+xml;base64,PHN2ZyB...down_arrow_svg...) no-repeat right center', backgroundSize: '16px 16px' }}>
//             {locationsandtheatresinfo.map(function (i, index) {
//               return <option key={index} value={i.location}>{i.location}</option>;
//             })}
//           </select>
//         </div>
//       </div>

//       <div style={{ marginTop: "20px" }}>
//         {
//           locationsandtheatresinfo.map(function (j) {
//             if (locationName === j.location) {
//               return j.theatres.map(function (k, index) {
//                 return (
//                   <div className="card" style={{ width: "100%" }} key={index}>
//                     <ul className="list-group list-group-flush">
//                       <li className="list-group-item">
//                         <strong>{k.theatreName}</strong>
//                         <span style={{ marginLeft: "10px" }}>
//                           {k.showTimes.join("     ")}
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 );
//               });
//             }
//             return null; // To avoid returning undefined when location doesn't match
//           })
//         }
//       </div>
//     </>
//   );
// }

// export default LocationandTheatre;



// ------------------------------------------

// import React, { useEffect, useState } from 'react';
// import Axios from "axios";
// import "./App.css"

// function LocationandTheatre() {
//   const [locationsandtheatresinfo, setLocationsAndTheatresInfo] = React.useState([]);
//   const [locationName, setLocationName] = React.useState("");


//   const [dates,setDates]=useState([{
//     date:"",
//     monthName:"",
//     dayName:""
//   }])

//   const [displayTheatresInfo,setDisplayTheatresInfo]=useState(false)

//   const [enteredDayName,setEnteredDayName]=useState("")

//   useEffect(function () {
//     Axios.get("http://localhost:9000/locations")
//       .then(function (output) {
//         setLocationsAndTheatresInfo(output.data.info);
//       });
//   }, []);

//   function collectLocation(event) {
//     setLocationName(event.target.value);
//   }

//   useEffect(function()
// {
//   let info=[]
//   for(let i=0;i<4;i++)
//   {

//     const dayName=new Date().toLocaleString('default',{weekday:'short'})
//     const monthName=new Date().toLocaleString('default',{month:'short'})
//     const date=new Date().getDate()

//     info.push({
//       dayName:dayName,
//       monthName:monthName,
//       date:date+i
//     })
//   }
//   setDates(info)
// },[])


// function dateClicked(receivedDayName)
// {
//   setEnteredDayName(receivedDayName)
//   //Logic to change boolean to true
//   setDisplayTheatresInfo(true)

// }



//   return (
//     <>

// {/* {locationName ? (
//   <div className="border p-3">
//    {
//      dates.map(function(i)
//     {
//       return <>
//       <h3>{i.date}</h3>
//     <h3>{i.monthName}</h3>
//     <h3>{i.dayName}</h3>
//       </>
//     })
//     }
//   </div>
// ) : null} */}

// {locationName ? (
//   <div className="border border-danger d-flex gap-10 p-3">
//     {
//       dates.map(function(i, index) {
//         return (
//           <div style={{cursor:"pointer"}} onClick={function()
//           {
//             dateClicked(i.dayName)
//           }}
//            key={index} className={enteredDayName==i.dayName ? "apply" : null}>
//           <h3>{i.dayName.toUpperCase()}</h3>
//             <h3>{i.date}</h3>
//             <h3>{i.monthName.toUpperCase()}</h3>

//           </div>
//         );
//       })
//     }
//   </div>
// ) : null}


//       <div className="d-flex justify-content-end p-3">
//         <div className="dropdown">
//           <select onChange={collectLocation} className="form-select w-auto d-inline-block" style={{ appearance: 'none', paddingRight: '2rem', background: 'url(data:image/svg+xml;base64,PHN2ZyB...down_arrow_svg...) no-repeat right center', backgroundSize: '16px 16px' }}>
//             {locationsandtheatresinfo.map(function (i, index) {
//               return <option key={index} value={i.location}>{i.location}</option>;
//             })}
//           </select>
//         </div>
//       </div>

//       {
//         displayTheatresInfo==true ? <div style={{ marginTop: "20px" }}>
//         {
//           locationsandtheatresinfo.map(function (j) {
//             if (locationName === j.location) {
//               return j.theatres.map(function (k, index) {
//                 return (
//                   <div className="card" style={{ width: "100%" }} key={index}>
//                     <ul className="list-group list-group-flush">
//                       <li className="list-group-item">
//                         <strong style={{fontWeight:900,fontSize:"20px"}}>{k.theatreName}</strong>
//                         <div style={{ marginTop: "5px" }}>
//                           {k.showTimes.map((l, idx) => (
//                             <span key={idx} style={{ marginRight: "10px" }}>
//                               <button className='btn btn-outline-success'>{l}{idx < k.showTimes.length - 1 ? " " : ""}</button>
//                             </span>
//                           ))}
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 );
//               });
//             }
//             return null;
//           })
//         }
//       </div>:null 
//       }
//     </>
//   );
// }

// export default LocationandTheatre;

// line 222
// ----------------------------------

// function generateCalendar(month,year)
// {
//   const daysInMonth=new Date(8,2024,0).getDate()
//   console.log(daysInMonth)

// }
// 0 means previous day 
//aug1st, july31st
//number of days-31


// ----------------------------------

import React, { useEffect, useState } from 'react';
import Axios from "axios";
import "./App.css"
import { useNavigate } from 'react-router-dom';
import { addSeatNumber } from './redux';
import { useDispatch } from 'react-redux';

function LocationandTheatre(props) {

  const navigate = useNavigate()

  const [locationsandtheatresinfo, setLocationsAndTheatresInfo] = React.useState([]);
  const [locationName, setLocationName] = React.useState("");

  const [dates, setDates] = useState([]);

  const [displayTheatresInfo, setDisplayTheatresInfo] = useState(false)

  const [enteredDayName, setEnteredDayName] = useState("")

  const url=import.meta.env.VITE_BACKEND_URL

  const [enteredSeatCount,setEnteredSeatCount]=useState("")

const dispatch=useDispatch()

  useEffect(function () {
   
    Axios.get(`${url}/locations`)
      .then(function (output) {
        setLocationsAndTheatresInfo(output.data.info);
      });
  }, []);

  function collectLocation(event) {
    setLocationName(event.target.value);
  }

  useEffect(function () {
    let info = [];
    for (let i = 0; i < 4; i++) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);

      const dayName = currentDate.toLocaleString('default', { weekday: 'short' });
      const monthName = currentDate.toLocaleString('default', { month: 'short' });
      const date = currentDate.getDate();

      info.push({
        dayName: dayName,
        monthName: monthName,
        date: date
      });
    }
    setDates(info);
  }, []);

  function dateClicked(receivedDayName) {
    setEnteredDayName(receivedDayName)
    //Logic to change boolean to true
    setDisplayTheatresInfo(true)
  }


  // function displaySeatsCount() {
  //   //Display seats count ranging from 1 to 10
  //   //Logic to navigate to DisplaySeatsCount component
  //   navigate("/seatsCount")
  // }

  function collectSeatCount(receivedSeatCount)
  {
    dispatch(addSeatNumber(receivedSeatCount))
    props.seatFunction(receivedSeatCount)
  }


function bookTheSeat()
{
  navigate("/bookseats")
}  

  return (
    <>
      {locationName ? (
        <div className="border border-danger p-3 d-flex gap-10">
          {dates.map(function (i, index) {
            return (
              <div style={{ cursor: "pointer" }} onClick={function () {
                dateClicked(i.dayName)
              }} key={index} className={enteredDayName == i.dayName ? "apply mx-2" : null}>
                <h3>{i.dayName.toUpperCase()}</h3>
                <h3>{i.date}</h3>
                <h3>{i.monthName.toUpperCase()}</h3>

              </div>
            );
          })}
        </div>
      ) : null}

      <div className="d-flex justify-content-end p-3">
        <div className="dropdown">
          <select onChange={collectLocation} className="form-select w-auto d-inline-block" style={{ appearance: 'none', paddingRight: '2rem', background: 'url(data:image/svg+xml;base64,PHN2ZyB...down_arrow_svg...) no-repeat right center', backgroundSize: '16px 16px' }}>
            {locationsandtheatresinfo.map(function (i, index) {
              return <option key={index} value={i.location}>{i.location}</option>;
            })}
          </select>
        </div>
      </div>

      {
        displayTheatresInfo == true ? <><div style={{ marginTop: "20px" }}>
          {locationsandtheatresinfo.map(function (j) {
            if (locationName === j.location) {
              return j.theatres.map(function (k, index) {
                return (
                  <div className="card" style={{ width: "100%" }} key={index}>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong style={{ fontWeight: 900, fontSize: "20px" }}>{k.theatreName}</strong>
                        <div style={{ marginTop: "5px",display:"flex" }}>
                          {k.showTimes.map((l, idx) => (
                         
                             
                              <span key={idx} style={{ marginRight: "10px" }}>
                                <button onClick={bookTheSeat} className='btn btn-outline-success'>{l}{idx < k.showTimes.length - 1 ? " " : ""}</button>
                              </span>
                           

                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              });
            }
            return null;
          })}
        </div></> : null
      }
    </>
  );
}

export default LocationandTheatre;


//bootstrap js, popper js,jquery 
{/* <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className='btn btn-outline-success'>{l}{idx < k.showTimes.length - 1 ? " " : ""}</button> */ }