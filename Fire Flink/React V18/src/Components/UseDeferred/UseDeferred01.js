import React, {
  useDeferredValue,
  useEffect,
  useMemo,
} from "react";

function UseDeferred01({ data }) {
  const queary = useDeferredValue(data);
  let li = useMemo(() => {
    let list = [];
    for (let i=0; i<25000;i++) {
      list.push(<div key={i}>{queary}</div>);
    }
    return list;
  }, [queary]);

  useEffect(() => {
    console.log(`input  :${data}`);
    console.log(`queary  :${queary}`);
  }, [data, queary]);

  return li;
}

export default UseDeferred01;
