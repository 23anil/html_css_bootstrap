import React, { useInsertionEffect } from 'react'

function Colorchange() {
    useInsertionEffect('lightblue',[])
  return (
    <div>
        This component changes the background color on insertion
    </div>
  )
}

export default Colorchange