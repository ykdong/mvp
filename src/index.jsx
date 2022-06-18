import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <h1>hello from here</h1>
    </>
  )
};

root.render(<App />);