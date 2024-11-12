import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Certifique-se de que este arquivo existe
import App from "./App.jsx"; // Verifique se o caminho está correto

// R0TAS
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import List from "./componentes/List_Controle.jsx";
import Register from "./componentes/UploadControl.jsx";
import CadastroForm from "./componentes/UploadOS.jsx";
import ListOS from "./componentes/List_OS.jsx";
import ListControl from "./pages/Listas.jsx";
import RegisterList from "./pages/RegisterList.jsx";
import ErrorPage from "./componentes/errorPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashOS from "./componentes/Dash_OS.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Cadastro_diario',
        element: <Register />,
      },
      {
        path: '/Controle_Equipamentos',
        element: <List />,
      },
      {
        path: '/Cadastro_OS',
        element: <CadastroForm />,
      },
      {
        path: '/Controle_OS',
        element: <ListOS />,
      },
      {
        path: '/Lista_Controles',
        element: <ListControl/>,
      },
      {
        path: '/Cadastro',
        element: <RegisterList/>,
      },
      {
        path: '/Dashboard',
        element: <Dashboard/>,
      },
      {
        path: '/DashOS',
        element: <DashOS/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
