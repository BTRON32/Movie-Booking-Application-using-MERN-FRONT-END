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
