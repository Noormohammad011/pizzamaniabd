import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  addPizzaReducer,
  editPizzaReducer,
  getAllPizzasReducer,
  getPizzaByIdReducer,
} from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducers'
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from './reducers/userReducers'
import {
  getAllOrdersReducer,
  getUserOrdersReducer,
  placeOrderReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
  getAllPizzas: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editPizzaReducer: editPizzaReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
})

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
