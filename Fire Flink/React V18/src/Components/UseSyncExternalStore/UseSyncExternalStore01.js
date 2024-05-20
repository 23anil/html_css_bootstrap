import React, { useSyncExternalStore } from "react";
let score = 0;
let emit=null;
function UseSyncExternalStore01() {
  let increment = () => {
    score=score+1;
  emit();
  };
  return (
    <div>
      <Score />
      <button onClick={increment}>Incre</button>
    </div>
  );
}
function subscribe(notify){
    emit=notify
}

function getSnapshot(){
    return score;
}

function Score() {
    const data=useSyncExternalStore(subscribe,getSnapshot)
  return <h1>{score}</h1>;
}

export default UseSyncExternalStore01;
