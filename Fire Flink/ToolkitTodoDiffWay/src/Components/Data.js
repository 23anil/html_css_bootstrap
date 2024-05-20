import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { fetchUserData } from "./aR";

function Data() {
  let dispatch = useDispatch();
  let {users,loading,error}=useSelector((state)=>state.app)
  useEffect(()=>{
    dispatch(fetchUserData())
  },[dispatch])
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>
 {users.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
  </div>;
}

export default Data;
