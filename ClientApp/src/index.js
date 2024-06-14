import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Root from "./Views/Root";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ErrorPage from "./components/ErrorPage";
import './custom.css';
import DiscoverMovieForm from './components/DiscoverMovieForm';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <DiscoverMovieForm />,
      },
     
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);

serviceWorkerRegistration.unregister();
