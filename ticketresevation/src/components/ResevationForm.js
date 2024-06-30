import React,{useState} from 'react'
import { newBooking,cancelBooking } from '../redux/action/bookingactions';
import {useDispatch} from 'react-redux'
export default function ResevationForm() {
    const [formdetails,setformdetails]=useState({id:"",name:"",amount:""});
    const dispatch=useDispatch();
    const bookticket=()=>{
        var bookingaction=newBooking(formdetails.id,formdetails.name,formdetails.amount)
        dispatch(bookingaction);
    }
    const cancelbooking=()=>{
        var cancelaction=cancelBooking(formdetails.id,formdetails.name,formdetails.amount)
        dispatch(cancelaction);
    }   
    const handlechange=(event)=>{
       var name=event.target.name;
       setformdetails({...formdetails,[name]:event.target.value})
    }
  return (
    <div>
        <form>
            Id: <input type="text" name="id" id="id"
            value={formdetails.id}
            onChange={handlechange}></input><br></br>
            Name: <input type="text" name="name" id="name"
            value={formdetails.name}
            onChange={handlechange}></input><br></br>
            Amount: <input type="text" name="amount" id="amount"
            value={formdetails.amount}
            onChange={handlechange}></input>
            <button type="button" name="btn" id="btn" onClick={bookticket}>Book ticket</button>&nbsp;&nbsp;&nbsp;
            <button type="button" name="btn" id="btn" onClick={cancelbooking}>Cancel ticket</button>

        </form>
    </div>
  )
}
