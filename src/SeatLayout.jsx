import React, { useState } from 'react'
import "./App.css"
import Seat from './Seat'
import { useSelector } from 'react-redux'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'



function SeatLayout(props) {

  const navigate=useNavigate()

  console.log(props.count)
  
  const [seatsSelected,setSeatsSelected]=useState(props.count)

    //40 seats
    //rows=5
    //columns=8

    const [rowCount,setRowCount]=useState(10)
    //rowCount=5
    const [colCount,setColCount]=useState(15)
    //colCount=8
    const url=import.meta.env.VITE_BACKEND_URL
    const api_key=import.meta.env.VITE_RAZORPAY_API_KEY

    const totalSeats=rowCount*colCount
    // console.log(totalSeats)=150

    const seatGrid=[]

    for(let i=1;i<=totalSeats;i++)
    {
        seatGrid.push(<Seat seatnumber={i} seatCount={props.count}/>)
    }
    const [count,setCount]=useState(0)
    
    function collect()
    {
      setCount(count+1)
    }
    
    //To Connect to any end point, we make use of Axios

    //150 RS

    function pleaseMakeThePayment()
    {
      //data you want to send to backend always in object format
      
      Axios.post(`${url}/create/order`,{amount:seatsSelected*150})
      .then(function(result)
    {
      handlePaymentVerify(result.data.output)
      
    })
    }

    async function handlePaymentVerify(receivedData)
    {
      //Logic to do the verification

      const options={
        
        key:(`${api_key}`),
        amount:receivedData.amount,
        currency:receivedData.currency,
        // name:"Raju",
        name:"Payment Gateway",
        description:"Oppenheimer",
        // description:receivedData.movie_name,
        order_id:receivedData.id,
        handler: async function(output)
        {
          //Logic for verification
          // console.log(output)
          // console.log(options)
          

          
        }
      }

      new window.Razorpay(options).open()
      navigate("/bookings")


    }


  return (
    // gridTemplateColumns:"50px 50px 50px 50px 50px 50px 50px 50px"
    <>
      <h3 style={{textAlign:"center"}}>PRICE: 150</h3>
      {/* <h3 style={{textAlign:"center"}}>PRICE: ₹150</h3> */}
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
    <h1 style={{fontWeight:800,marginTop:"20px",textAlign:"center"}}>Select your seats</h1>
    {seatsSelected==count ?<> <div onClick={collect} className='disable' id='parent' style={{display:"grid",gridTemplateColumns:`repeat(${colCount}, 50px)`, gridGap:"10px",marginTop:"100px",marginLeft:"50px"}}>
       
       {seatGrid}
   </div> <button onClick={pleaseMakeThePayment} className='btn btn-success'>Make Payment</button></> : <div onClick={collect} className='parent' style={{display:"grid",gridTemplateColumns:`repeat(${colCount}, 50px)`, gridGap:"10px",marginTop:"100px",marginLeft:"50px"}}>
       
       {seatGrid}
   </div>}
    </>
  )
}

export default SeatLayout

//Razorpay---->Payment gateway-->Card, UPI, Apps,......-->Dummy payment

//Displaying details in seat layout page and in Booking History component