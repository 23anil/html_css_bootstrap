import { render, screen } from "@testing-library/react";
import Demo from "./Demo";

describe("test01", () => {
  it("testcase01", () => {
    render(<Demo />);
    const data = screen.getByText(/hii Anil/i);
    expect(data).toBeInTheDocument;
  });

  describe("test02", () => {
    it("testcase02", () => {
      render(<Demo />);
      // const value = screen.getAllByRole()
      const data = 10;
      expect(data).toBe(10);
    });
  });
});

test("check",()=>{
  render(<Demo/>)
  let data=screen.getAllByRole();
  
})

