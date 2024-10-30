import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Criando rotas

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import List from "./pages/List_OS.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
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
        element: <List />,
      },
    ],
  }
]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)