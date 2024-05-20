import React, { useId, useState } from "react";

function UseID() {
  const uniqcId = useId();
  // const uniqcId01 = useId();
  console.log("uniqcId", uniqcId);
  // console.log("uniqcId01",uniqcId01);
  return (
    <div>
      <label htmlFor={`${uniqcId}-name-lable`}>Name</label>
      <input id={`${uniqcId}-name`} type="text" placeholder="Enter Name" />
      <hr />
      <label htmlFor={`${uniqcId}-email-lable`}>Email</label>
      <input id={`${uniqcId}-email`} type="Email" placeholder="Enter Email" />
    </div>
  );
}

export default UseID;
