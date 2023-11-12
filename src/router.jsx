import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Room from "./pages/Room";
import Layout from "./pages/Layout";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Room />,
        path: "/rooms/:id",
      },
    ],
  },
]);
