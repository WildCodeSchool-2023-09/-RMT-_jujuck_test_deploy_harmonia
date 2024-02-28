import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserProvider from "./context/User";
import App from "./App";
import Sign from "./pages/Sign";
import DashBoard from "./pages/users/DashBoard";
import Home from "./pages/users/Home";
import Discovery from "./pages/users/Discovery";
import Gallery from "./pages/users/Gallery";
import Try from "./pages/users/Try";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inscription",
    element: <Sign type="up" />,
  },
  {
    path: "/connexion",
    element: <Sign type="in" />,
  },
  {
    path: "/dashboard/",
    element: <DashBoard />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "decouverte",
        element: <Discovery />,
      },
      {
        path: "gallerie",
        element: <Gallery />,
      },
      {
        path: "degustation/:barcode",
        element: <Try />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
