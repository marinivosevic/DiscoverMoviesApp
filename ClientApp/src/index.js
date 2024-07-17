import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Root from "./Views/Root";
import MovieLayout from "./Views/MovieLayout";
import ErrorPage from "./components/ErrorPage";
import "./custom.css";
import MainLayout from "./Views/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
      {
        path: "movie/:id",
        element:<MovieLayout />,
      }
    ],

  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

serviceWorkerRegistration.unregister();
