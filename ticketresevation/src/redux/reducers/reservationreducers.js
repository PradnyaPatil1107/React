//reducers are functions which accepts old state and action
//object as a parameter

export const manageReservationList=(oldreservationList=[],action)=>{
    console.log("in manage reservation list function")
    switch(action.type){
        case "new_booking":
            return [...oldreservationList,{...action.payload}]
        case "cancel_booking":
            return oldreservationList.filter(ob=>ob.id!==action.payload.id)
        default:
            return oldreservationList;
    }

}

export const manageCancellationList=(oldcancellationList=[],action)=>{
    console.log("in manage cancellation list")
    switch(action.type){
        case "cancel_booking":
            return [...oldcancellationList,{...action.payload}]
        default:
            return oldcancellationList;
    }
   
}

export const manageAmount=(oldamt=3000,action)=>{
    console.log("in manage amount reducer")
    switch(action.type){
        case "new_booking":
            return oldamt+parseFloat(action.payload.amount);
        case "cancel_booking":
            return oldamt-parseFloat(action.payload.amount);
        default:
            return oldamt;   
    }

}


