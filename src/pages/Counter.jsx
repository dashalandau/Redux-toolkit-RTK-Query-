import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slice/counterSlice'

// import { Counter } from '../../pages/Counter'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const shop = [
    {
        id: 1,
        title: "T-shirt",
        price: 100
    },
    {
        id: 2,
        title: "Cap",
        price: 1000
    },
  ]

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;