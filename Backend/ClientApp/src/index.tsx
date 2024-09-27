import "bootstrap/dist/css/bootstrap.css";

import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Root from "./Views/Root";
import MovieLayout from "./Views/MovieLayout";
import ErrorPage from "./components/ErrorPage";
import "./custom.css";
import MainLayout from "./Views/MainLayout";
import Login from "./Views/Login"
import Register from "./Views/Register"
import ProtectedRoutes  from "./Routes/ProtectedRoutes";
import Profile from "./Views/Profile";
import  {AuthProvider}  from "./Context/AuthProvider";
import React from "react";
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
  {
    path:"/profile",
    element:<ProtectedRoutes layout={MainLayout} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <ErrorPage />,
  }
  
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

serviceWorkerRegistration.unregister();
