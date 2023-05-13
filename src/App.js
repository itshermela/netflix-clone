import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import * as ConstantRoutes from "./constants/routes"
import Home from "./pages/home"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={ConstantRoutes.SIGN_IN}>
        </Route>
        <Route path={ConstantRoutes.SIGN_UP}>
        </Route>
        <Route path={ConstantRoutes.BROWSE}>
        </Route>
        <Route path={ConstantRoutes.HOME}  element ={<Home/>}>
        </Route>
      </Routes>
    </Router>
    
  )
}
