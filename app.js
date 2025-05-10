import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/Heading";
import Body from "./src/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";

const AppContainer = () => {
  return (
    <div>
      <Heading />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
