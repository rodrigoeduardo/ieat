import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/inicio";
import Docentes from "./pages/docentes";
import Aula from "./pages/aula";
import { AuthContextProvider } from "./contexts/useAuthContext";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/docentes",
        element: <Docentes />,
      },
      {
        path: "/aula",
        element: <Aula />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
