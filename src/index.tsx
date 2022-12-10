import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme } from "../chakra";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Wrapper } from "./components/Wrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper child={<Home />} />,
  },
  {
    path: "/who",
    element: <Wrapper child={<About />} />,
  },
  {
    path: "/gallery",
    element: <Wrapper child={<div>gallery</div>} />,
  },
  {
    path: "/contact",
    element: <Wrapper child={<div>contact</div>} />,
  },
]);

root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
