import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1>Namaste React Functional Component with arrow function</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
