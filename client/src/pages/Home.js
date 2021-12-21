import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaAction'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Loading from '../components/Loading'
import Pizza from '../components/Pizza'
// import pizzas from '../pizzasdata'
const Home = () => {
  const dispatch = useDispatch()

  const pizzaState = useSelector((state) => state.getAllPizzas)

  const { pizzas, error, loading } = pizzaState

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])

  return (
    <div>
      <Filter />
      <div className='container'>
        <div className='row justify-content-center'>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error='Somethin went Wrong' />
          ) : (
            pizzas.map((pizza, i) => (
              <div className='col-md-4 p-3' key={i}>
                <Pizza pizza={pizza} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
