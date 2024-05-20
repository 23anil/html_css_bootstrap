import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';

function TestDropDown() {
  const buttonTitleStyle = {
    color: 'blue', // Change this to the desired color
  };
  
  return (
    <div>
       <DropdownButton id="nested-dropdown" title="Outer Dropdown" style={buttonTitleStyle}>
      <Dropdown.Item eventKey="1">Outer Option 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Outer Option 2</Dropdown.Item>
      <Dropdown.Divider />
      <DropdownButton id="inner-dropdown" title="Inner Dropdown" drop="right" style={buttonTitleStyle}>
        <Dropdown.Item eventKey="3">Inner Option 1</Dropdown.Item>
        <Dropdown.Item eventKey="4">Inner Option 2</Dropdown.Item>
      </DropdownButton>
    </DropdownButton>
    </div>
  )
}

export default TestDropDown