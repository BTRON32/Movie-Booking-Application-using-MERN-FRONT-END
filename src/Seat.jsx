import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Seat(props)
{

    const [seatsSelected,setSeatsSelected]=useState(props.seatCount)
    


//    to read and access info/data from redux store-useSelector
    
//     useEffect(function()
// {
//     console.log(props.seatCount)
    
// }[props.seatCount])//print this everytime props.seatCount changes
    

    const [seatSelected,setSeatSelected]=useState(false)

   

    function handleSeatButton()
    {
        setSeatSelected(true)
        
    }

   
    return (
        <>
        <div>
        
            <button className={seatSelected==true?'seatbutton':null} onClick={handleSeatButton} style={{border:'1px solid black',width:"30px",height:"30px",textAlign:"center"}}>
            {props.seatnumber}
            </button>
        </div>
        </>
    )
}

export default Seat