import React from 'react'
import { useNavigate } from 'react-router-dom'

function BookSeats(props) {

    const navigate=useNavigate()
    const [seatCount, setSeatCount] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


    function fetchSeatCount(receivedSeatCount)
    {
        props.func(receivedSeatCount)
        navigate("/seatlayout")
    }

  return (
    <div>
    <h1 style={{fontWeight:800,marginTop:"20px"}}>How many seats?</h1>
        {
            seatCount.map(function(i)
            {
                return <button onClick={function()
                {
                    fetchSeatCount(i)
                }} style={{margin:"20px"}}>{i}</button>
            })
        }
    </div>
  )
}

export default BookSeats