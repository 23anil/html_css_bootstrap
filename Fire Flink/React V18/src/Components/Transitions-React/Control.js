import React, { useState } from "react";
import About from "./About";
import Post from "./Post";
import Contact from "./Contact";

function Control() {
  const [tag, settag] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          settag('about');
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          settag('post');
        }}
      >
        Post
      </button>
      <button
        onClick={() => {
          settag('contact');
        }}
      >
        Contact
      </button>
      {tag === "about" && <About />}
      {tag === "post" && <Post />}
      {tag === "contact" && <Contact />}
    </div>
  );
}

export default Control;
