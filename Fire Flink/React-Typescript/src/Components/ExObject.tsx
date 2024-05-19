import React from "react";
import{ExObjectprops} from './datas'

function ExObject({fullname}: ExObjectprops) {
  return (
    <div>
      <h1>
        {fullname.Fname} {fullname.Lname}
      </h1>
    </div>
  );
}

export default ExObject;
