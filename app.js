import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/Heading";
import Body from "./src/body";

const AppContainer = () => {
  return (
    <div>
      <Heading />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppContainer />);
