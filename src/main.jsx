import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Certifique-se de que este arquivo existe
import App from "./App.jsx"; // Verifique se o caminho está correto

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import List from "./componentes/List_Controle.jsx";
import Register from "./componentes/UploadControl.jsx";
import CadastroForm from "./componentes/UploadOS.jsx";
import ListOS from "./componentes/List_OS.jsx";
import ListControl from "./pages/Listas.jsx";
import RegisterList from "./pages/RegisterList.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
<<<<<<< HEAD
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
=======
        path: '/OS/',
        element: <Login/>,
      },
      {
        path: '/OS/home',
        element: <Home />,
      },
      {
        path: '/OS/registerOS',
        element: <Register />,
      },
      {
        path: '/OS/listOS',
>>>>>>> a7875e72c5635d845d547bc01db902195fdee69f
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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
