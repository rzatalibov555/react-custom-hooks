import React from 'react'
import useClicker from '../../hooks/useClicker'
export default function Plusser() {

    const {count, plus, minus} = useClicker()

  return (
    <div>

        <p>Plusser Count: {count}</p>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>

    </div>
  )
}
