import { createBrowserRouter } from "react-router-dom";
import WrapPage from "../layouts/WrapPage";
import IndexPage, { clientesLoader } from "../pages/IndexPage";
import NuevoCliente, { crearClienteAction } from "../pages/NuevoCliente";
import ErrorPage from "../pages/ErrorPage";
import EditarCliente, {editarClienteLoader, editarClienteAction} from "../pages/EditarCliente";
import {eliminarClienteAction} from "../components/Cliente"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WrapPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "/registro",
        element: <NuevoCliente />,
        action: crearClienteAction,
        errorElement:<ErrorPage/>
      },
      {
        path: "/registro/:clienteId/editar",
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/registro/:clienteId/eliminar",
        action: eliminarClienteAction
      }
    ],
  },
]);
