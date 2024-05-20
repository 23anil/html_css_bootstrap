import React, { useEffect, useRef } from "react";

function useInsertionEffect(color, dependency) {
  let val = useRef(true);
  useEffect(() => {
    if (!val.current) {
      return;
    }
    val.current = false;
    document.body.style.backgroundColor = color;
    return ()=>{
        document.body.style.backgroundColor=''
    }
  },dependency);
}

export default useInsertionEffect;
