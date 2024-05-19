import React from 'react'
type advanceProps={
    show:"loading"|"fullfiled"|"error"
}
function AdvanceProps(props:advanceProps) {
    let message;
    if(props.show==="loading"){
        message="Loading"
    }
    else if(props.show==="fullfiled")
    {
        message="Data Fetch Secussfully"
    }
    else{
        message="Get Error" 
    }
  return (
    <div><h1>{message}</h1></div>
  )
}

export default AdvanceProps