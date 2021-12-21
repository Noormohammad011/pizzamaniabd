import axios from 'axios'
import {
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstatns'

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST })

  try {
    const { data } = await axios.post('/api/users/register', user)
    console.log(data)
    dispatch({ type: USER_REGISTER_SUCCESS })
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAILED, payload: error })
  }
}

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST })

  try {
    const { data } = await axios.post('/api/users/login', user)
    console.log(data)
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('currentUser', JSON.stringify(data))
    // window.location.href = '/'
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED, payload: error })
  }
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('currentUser')
  localStorage.removeItem('cartItems')
  window.location.href = '/login'
}

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST })

  try {
    const response = await axios.get('/api/users/getallusers')
    console.log(response)
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: GET_USERS_FAILED, payload: error })
  }
}

export const deleteUser = (userid) => async () => {
  try {
    await axios.post('/api/users/deleteuser', { userid })
    alert('User deleted successfully')
    window.location.reload()
  } catch (error) {
    alert('Something went wrong')
    console.log(error)
  }
}
