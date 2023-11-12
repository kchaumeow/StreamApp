import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router.jsx";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </ChakraProvider>
);
