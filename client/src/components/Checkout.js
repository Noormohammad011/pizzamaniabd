import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderAction'
import Error from './Error'
import Loading from './Loading'
import Success from './Success'

const Checkout = ({ subtotal }) => {
  const orderstate = useSelector((state) => state.placeOrderReducer)
  const { loading, error, success } = orderstate
  const userstate = useSelector((state) => state.loginUserReducer)
  const { currentUser } = userstate

  const dispatch = useDispatch()
  function tokenHander(token) {
    console.log(token)
    dispatch(placeOrder(token, subtotal))
  }
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}
      {success && <Success success='Your Order Placed Successfully' />}

      {currentUser ? (
        <StripeCheckout
          amount={subtotal * 100}
          shippingAddress
          token={tokenHander}
          stripeKey='pk_test_51K8gdwLv5rAyPDp0iOxW19OQrpqZ7yKdG5eKQ5dSdUVLgp8uKZ5dAXDIUqBiaYctTTyfyzNDhCDdWmMy6IIb8SzN00O60I9Vgy'
          currency='USD'
        >
          <button className='btn'>
            Pay Now
          </button>
        </StripeCheckout>
      ) : (
        <Link to='/login' className='btn'>
          Login to Pay
        </Link>
      )}
    </div>
  )
}

export default Checkout
