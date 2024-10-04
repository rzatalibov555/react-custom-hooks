import React from 'react'
import useClicker from '../../hooks/useClicker'


export default function Clicker() {


    const {count, plus, minus} = useClicker()


  return (
    <div>

        <p>Clicker Count:{count}</p>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>

    </div>
  )
}
