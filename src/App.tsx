import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";

const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/about",
  },
  {
    path: "/gallery",
  },
  {
    path: "/contact",
  },
]);

function App() {
  return <Wrapper child={<div>test</div>} />;
}

export default App;
