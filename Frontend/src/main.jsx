import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Components/Auth/Register.jsx";
import Login from "./Components/Auth/Login.jsx";
import AuthPrivateRoute from "./Components/PrivateRoute/AuthPrivateRoute.jsx";
import ForgetPass from "./Components/Auth/ForgetPass.jsx";
import AddVisa from "./Components/visa/AddVisa.jsx";
import AllVisas from "./Components/visa/AllVisas.jsx";
import VisaDetails from "./Components/visa/VisaDetails.jsx";
import ComPrivetRoute from "./Components/PrivateRoute/ComPrivetRoute.jsx";
import MyAddedVisa from "./Components/visa/MyAddedVisa.jsx";
import MyApplications from "./Components/visa/MyApplications.jsx";
import Error from "./Components/Error/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/register",
        element: (
          <AuthPrivateRoute>
            <Register />,
          </AuthPrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthPrivateRoute>
            <Login />,
          </AuthPrivateRoute>
        ),
      },
      {
        path: "/add-visa",
        element: (
          <ComPrivetRoute>
            <AddVisa />
          </ComPrivetRoute>
        ),
      },
      {
        path: "/all-visas",
        loader: () => fetch("https://b-10-assignment-10.vercel.app/visas"),
        element: <AllVisas />,
      },
      {
        path: "/visa-details/:id",
        element: (
          <ComPrivetRoute>
            <VisaDetails />,
          </ComPrivetRoute>
        ),
      },
      {
        path: "/my-added-visa",

        element: (
          <ComPrivetRoute>
            <MyAddedVisa />
          </ComPrivetRoute>
        ),
      },
      {
        path: "/my-visa-application",

        element: (
          <ComPrivetRoute>
            <MyApplications />
          </ComPrivetRoute>
        ),
      },
      {
        path: "/forget-password",
        element: (
          <AuthPrivateRoute>
            <ForgetPass />
          </AuthPrivateRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
