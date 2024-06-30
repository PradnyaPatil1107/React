//write one function for each action in your code
//action creator functions
export const newBooking=(id,name,amount)=>{
    return({
        type:"new_booking",
        payload:{ 
            id,name,amount}
      
    })
}

export const cancelBooking=(id,name,amount)=>{
    return({
        type:"cancel_booking",
        payload:{ 
            id,name,amount}
      
    })
}