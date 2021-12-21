import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { registerUser } from '../actions/userAction'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || '/login'

  const registerstate = useSelector((state) => state.registerUserReducer)
  const { error, loading, success } = registerstate
  const dispatch = useDispatch()
  const registerHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return alert('Passwords do not match')
    } else {
      dispatch(registerUser({ name, email, password }))
      navigate(from, { replace: true })
    }
  }

  return (
    <div className='register'>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
          {loading && <Loading />}
          {success && <Success success='User Registered Successfully' />}
          {error && <Error error='Email already registred' />}

          <h2 className='text-center m-2' style={{ fontSize: '35px' }}>
            Register
          </h2>
          <form onSubmit={registerHandler}>
            <input
              required
              type='text'
              placeholder='name'
              className='form-control'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
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
            <input
              type='password'
              placeholder='confirm password'
              className='form-control'
              value={confirmPassword}
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
            />
            <button className='btn mt-3 mb-3'>REGISTER</button>
            <br />
            <a style={{ color: 'black' }} href='/login'>
              Click Here To Login
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
