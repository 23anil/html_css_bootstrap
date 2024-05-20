import React, { useSyncExternalStore } from 'react'

function WidthExample() {
  return (
    <div>
<Store/>
    </div>
  )
}

function subscribe(notify){
window.addEventListener('resize',notify)

return function(){
    window.removeEventListener('resize',notify)
}
}

function getSnapshot(){
return window.innerWidth;
}
function Store(){
   let value=useSyncExternalStore(subscribe,getSnapshot)
    return(<h1>scroll :{value}</h1>)
}

export default WidthExample