import React from 'react'
type headingprops={
    children:string
}
function Heading(props:headingprops) {
  return (
    <div>
        <h1>{props.children}</h1>
    </div>
  )
}

export default Heading