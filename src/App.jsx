import Movies from "./Movies"
import { useState } from "react"
import Navbar from "./Navbar"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Signup from "./Signup"
import Signin from "./Signin"
import MovieDetails from "./MovieDetails"
import LocationandTheatre from "./LocationandTheatre"
import SeatLayout from "./SeatLayout"
// import DisplaySeatsCount from "./DisplaySeatsCount"
import {useDispatch} from "react-redux"
import BookSeats from "./BookSeats"
import BookingHistory from "./BookingHistory"
import ProtectedRoutes from "./ProtectedRoutes"
import Home from "./Home"
import Footer from "./Footer"


function App() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [particularMovieDetails,setParticularMovieDetails]=useState("")

  const [selectedSeatsCount,setSelectedSeatsCount]=useState(0)
  //selectedSeatsCount=3

  return (
    <>
    <Navbar />
      <Routes>

      <Route path="/" element={<Home />} />

      <Route element={<ProtectedRoutes/>}>
      
      </Route>

      <Route path="/movies" element={<Movies e={email} details={setParticularMovieDetails}/>}></Route>
      

      <Route path="/moviedetails" element={<MovieDetails info={particularMovieDetails} />}></Route>
       <Route path="/locationandtheatre" element={<LocationandTheatre seatFunction={setSelectedSeatsCount} />}></Route>
       {/* <Route path="/seatsCount" element={<DisplaySeatsCount />}></Route> */}
       <Route path="/seatlayout" element={<SeatLayout info={particularMovieDetails} count={selectedSeatsCount} />}></Route>
       <Route path="/bookseats" element={<BookSeats func={setSelectedSeatsCount} />}></Route>

       <Route path="/bookings" element={<BookingHistory info={particularMovieDetails}/>}></Route>
      

      <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin e={email} p={password} se={setEmail} sp={setPassword} />}></Route>
       
      
      </Routes>
      <Footer />
    </>
  )
}

export default App


