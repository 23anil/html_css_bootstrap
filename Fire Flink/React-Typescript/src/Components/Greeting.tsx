import React from "react";
type Greetingprops = {
  name: string;
  count?: number;
  isloggedin: boolean;
};

function Greeting({name,count,isloggedin}: Greetingprops) {
  // const {count=0}=props
  return (
    <div>
      {isloggedin ? (
        <h1>
          Welcome {name}!!!... You have {count} unread messages
        </h1>
      ) : (
        <h1>Wel Come Gest!!...</h1>
      )}
    </div>
  );
}

export default Greeting;
