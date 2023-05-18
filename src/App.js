import React from "react"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import * as ConstantRoutes from "./constants/routes"
import { Home, Signin } from "./pages"

const router = createBrowserRouter([
  {
    path: ConstantRoutes.SIGN_IN,
    element: <Signin />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
export function App() {
  return (
    <RouterProvider router={router} /> 
  )
}
