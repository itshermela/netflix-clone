import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import * as ConstantRoutes from "./constants/routes"
import { Home, Signin, Signup, Browse } from "./pages"
import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export function App() {
  const { user } = useAuthListener()

  return (
    <Router>
    <Routes>
        <Route path={ConstantRoutes.SIGN_IN} element={
          <IsUserRedirect user={user} loggedInPath={ConstantRoutes.BROWSE} path={ConstantRoutes.SIGN_IN}>
            <Signin/>
          </IsUserRedirect>
        } 
        />
        <Route path={ConstantRoutes.SIGN_UP} element={
          <IsUserRedirect user={user} loggedInPath={ConstantRoutes.BROWSE} path={ConstantRoutes.SIGN_UP}>
            <Signup/>
        </IsUserRedirect>
        } 
        />
        <Route path={ConstantRoutes.BROWSE} element={
          <ProtectedRoute user={user} path={ConstantRoutes.BROWSE}>
              <Browse/>
          </ProtectedRoute>
        } 
        />
        <Route path={ConstantRoutes.HOME} element={
          <IsUserRedirect user={user} loggedInPath={ConstantRoutes.BROWSE} path={ConstantRoutes.HOME}>
            <Home/>
          </IsUserRedirect>
        }   
        />
    </Routes>
    </Router>
  )
}