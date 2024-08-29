import React from 'react'
import "./Footer.css"
// import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div style={{marginTop:"200px",justifyContent:"space-evenly", maxWidth:"2000px", minWidth:"300px"}} className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    {/* <img src={assets.logo} alt="" /> */}
                    <h1 style={{width:"150px",color:"tomato",fontSize:"21px"}}>Book My Movie</h1>
                    <p>Watch latest and your favorite movies in exclusive theatres. The best movie ticket booking website to exist. Enjoy your favorite movies at the best price in the best theatres and with the best experience. Enjoy and relive your movie experience to the fullest! </p>
                    <div className="footer-social-icons">
                        {/* <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" /> */}
                    </div>
                </div>
                <div style={{marginLeft:"70px"}} className="footer-content-center">
                    <h2>NAVIGATION LINKS</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/signup">Signup</a> </li>
                        <li><a href="/signin">Signin</a> </li>
                        <li><a href="/bookings">Booking History</a> </li>
                        <li><a href="/movies">Movies</a></li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9620000382</li>
                        <li>contact@bookmymovie.com</li>
                    </ul>
                </div>  

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Bookmymovie.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer