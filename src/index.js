import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// paginas
import Home from "./routes/Home";
import Prestadores from "./routes/Prestadores";
import Servicos from "./routes/Servicos";
import FormularioPrestador from "./routes/FormularioPrestador";
import FormularioServico from "./routes/FormularioServico";
import FormularioUploadCSV from "./routes/FormularioCSV";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/prestadores",
        element: <Prestadores />,
      },
      {
        path: "/servicos",
        element: <Servicos />,
      },
      {
        path: "/cadastro-prestador",
        element: <FormularioPrestador />,
      },
      {
        path: "/cadastro-servico",
        element: <FormularioServico />,
      },
      {
        path: "/cadastro-servico-CSV",
        element: <FormularioUploadCSV />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
