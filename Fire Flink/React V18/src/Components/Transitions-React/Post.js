import React from "react";

function Post() {
  let list = [];
  for (let i = 1; i < 25000; i++) {
    list.push(<li> Post #{i}</li>);
  }
  return (
 <>
      {list.map((val,idx) => {

        return(<li key={idx}>{val}</li>)
      })}
</>
  );
}

export default Post;
