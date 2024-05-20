import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi } from "./cRS";

function ApiCall() {
  let dispatch = useDispatch();
  let {users,loading,error} = useSelector((state) => state.values);

  useEffect(() => {
    dispatch(callApi());
  }, [dispatch]);


  if(loading){
    return <h1>Loading !!!...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }

  return <div>
    {
      users && users.map((val,idx)=>{
        return(<li key={idx}>{val.name}</li>)
      })
    }
  </div>;
}

export default ApiCall;
