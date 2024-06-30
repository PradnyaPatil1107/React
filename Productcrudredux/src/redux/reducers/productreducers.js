export const manageProductarray=(parr=[],action)=>{
    console.log("in manageproduct array")
    switch(action.type){
        case "set_data":
            console.log(action.payload)
            return [...action.payload]
        case "add_data":
            return [...parr,{...action.payload}]
        default:
            return parr;
    }

}