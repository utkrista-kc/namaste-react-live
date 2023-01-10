import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

//React Component
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Namaste React functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
