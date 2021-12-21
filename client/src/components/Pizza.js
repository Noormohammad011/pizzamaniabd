import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Pizza = ({ pizza }) => {
  const [quantity, setquantity] = useState(1)
  const [varient, setvarient] = useState('small')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const dispatch = useDispatch()
   AOS.init({})

  return (
    <div data-aos='zoom-in' className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <h5>{pizza.name}</h5>
        <img
          className='img-fluid'
          style={{ height: '200px', width: '200px' }}
          src={pizza.image}
          alt={pizza.name}
        />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value)
            }}
            className='form-control'
          >
            {pizza.varients.map((varient) => (
              <option value={varient}>{varient}</option>
            ))}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value)
            }}
            className='form-control'
          >
            {[...Array(10).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='mt-1'>
            Price : {pizza.prices[0][varient] * quantity} Rs/-
          </h1>
        </div>
        <div className='m-1 w-100'>
          <button
            className='btn'
            onClick={() => dispatch(addToCart(pizza, quantity, varient))}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            className='img-fluid'
            style={{ height: '400px' }}
            alt={pizza.name}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Pizza
