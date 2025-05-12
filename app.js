import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/Components/Heading";
import Body from "./src/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import Menu from "./src/Components/Menu";
import Profile from "./src/Components/ProfileClass";
import Shrimmer from"./src/Components/Shrimmer";

const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppContainer = () => {
  return (
    <div>
      <Heading />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:resName/:resId",
        element: <Menu />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shrimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
