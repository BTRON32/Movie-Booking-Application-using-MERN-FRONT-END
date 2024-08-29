import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {

    const isLoggedIn=false

    //if isLoggedIn=false, when I click on other paths===>/login
    //if isLoggedIn=true, when I click on other paths===>respective path
  return (
    <div>
        {
            isLoggedIn==true ? <Outlet /> : <Navigate to="/signin" />
            }
    </div>
  )
}

export default ProtectedRoutes