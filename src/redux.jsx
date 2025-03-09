import {createStore} from "redux"

const initialData={
    seatNumber:0
}

export function addSeatNumber(seatNo)
{
    return {
        type:"ADD_SEAT_NUMBER",
        payload:seatNo
    }
}

const seatReducer=(state=initialData,action)=>
    {
        if(action.type=="ADD_SEAT_NUMBER")
        {
            //Logic to add seat number to the redux store
            return {seatNumber:action.payload}
        }
        return state
}   

export const myStore=createStore(seatReducer) 
