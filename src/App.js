import React from "react"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import * as ConstantRoutes from "./constants/routes"
import { Home, Signin, Signup, Browse } from "./pages"

const router = createBrowserRouter([
  {
    path: ConstantRoutes.SIGN_IN,
    element: <Signin />,
  },
  {
    path: ConstantRoutes.SIGN_UP,
    element: <Signup />,
  },
  {
    path: ConstantRoutes.BROWSE,
    element: <Browse />,
  },
  {
    path: ConstantRoutes.HOME,
    element: <Home />,
  },
]);
export function App() {
  return (
    <RouterProvider router={router} /> 
  )
}
