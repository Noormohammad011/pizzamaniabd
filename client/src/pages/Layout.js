import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  Link, Outlet } from 'react-router-dom'

const Layout = () => {
   const userstate = useSelector((state) => state.loginUserReducer)
   const { currentUser } = userstate
 

   useEffect(() => {
     if (!currentUser.isAdmin) {
       window.location.href = '/'
     }
   }, [currentUser.isAdmin])

    return (
      <div>
        <div className='row justify-content-center p-3'>
          <div className='col-md-10'>
            <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>

            <ul className='adminfunctions'>
              <li>
                <Link to={'userslist'} style={{ color: 'white' }}>
                  Users List
                </Link>
              </li>
              <li>
                <Link to={'pizzaslist'} style={{ color: 'white' }}>
                  Pizzas List
                </Link>
              </li>
              <li>
                <Link to={'addpizza'} style={{ color: 'white' }}>
                  Add Pizza
                </Link>
              </li>
              <li>
                <Link to={'orderslist'} style={{ color: 'white' }}>
                  Orders List
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    )
}

export default Layout
