import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/userAction'

const Navbar = () => {
  const cartstate = useSelector((state) => state.cartReducer)
  const userstate = useSelector((state) => state.loginUserReducer)
  const { currentUser } = userstate
  const isAdmin = currentUser?.isAdmin
  const dispatch = useDispatch()
  return (
    <nav className='navbar navbar-expand-lg shadow-lg navbar-light bg-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <i className='fas fa-pizza-slice fa-2x'></i>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {currentUser ? (
              <li className='nav-item dropdown'>
                <p
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {currentUser.name}
                </p>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  {isAdmin ? (
                    <li>
                      <Link to='/admin/userslist' className='dropdown-item'>
                        Dashboard
                      </Link>
                    </li>
                  ) : null}

                  <li>
                    <Link to='/order' className='dropdown-item'>
                      Orders
                    </Link>
                  </li>

                  <li>
                    <p
                      className='dropdown-item'
                      onClick={() => {
                        dispatch(logoutUser())
                      }}
                    >
                      Logout
                    </p>
                  </li>
                </ul>
              </li>
            ) : (
              <li className='nav-item'>
                <Link
                  to='/login'
                  className='nav-link active'
                  aria-current='page'
                >
                  <i className='fas fa-sign-in-alt fa-2x'></i>
                </Link>
              </li>
            )}
            <li className='nav-item'>
              <Link to='/cart' className='nav-link active'>
                <i className='fas fa-cart-plus fa-2x'>
                  {cartstate.cartItems.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                  )}
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
