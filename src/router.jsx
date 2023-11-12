import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Room from "./pages/Room";
export const router = createBrowserRouter([
  {
    element: <Home />,
    index: true,
  },
  {
    element: <Room />,
    path: "/rooms/:id",
  },
]);
