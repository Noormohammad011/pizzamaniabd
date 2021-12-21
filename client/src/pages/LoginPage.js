import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../actions/userAction'
import Error from '../components/Error'
import Loading from '../components/Loading'

const LoginPage = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || '/'

  const loginstate = useSelector((state) => state.loginUserReducer)
  const { loading, error } = loginstate
  const dispatch = useDispatch()

  const loginHandler = (e) => {
    e.preventDefault()
      dispatch(loginUser({ email, password }))
      navigate(from, { replace: true })
  }
  return (
    <div className='login'>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
          <h2 className='text-center m-2' style={{ fontSize: '35px' }}>
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error='Invalid Credentials' />}

          <form onSubmit={loginHandler}>
            <input
              required
              type='email'
              placeholder='email'
              className='form-control'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <input
              type='password'
              placeholder='password'
              className='form-control'
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />

            <button className='btn mt-3 mb-3'>LOGIN</button>
            <br />
            <a style={{ color: 'black' }} href='/register' className='mt-2'>
              Click Here To Register
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
