import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = () => {
  const userstate = useSelector((state) => state.loginUserReducer)
  const { currentUser } = userstate
  let location = useLocation()

  if (!currentUser) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return children
}

export default PrivateRoute
