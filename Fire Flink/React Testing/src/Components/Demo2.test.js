import { render, screen } from "@testing-library/react"
import Demo from "./Demo"

test("check values",()=>{
    render(<Demo/>)
    let value=screen.getByPlaceholder()
  expect(value).toBe("Enter A Age ")
})