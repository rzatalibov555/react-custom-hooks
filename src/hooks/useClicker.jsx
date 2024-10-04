import { useState } from 'react' 


export default function useClicker() {

    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        setCount(count - 1)
    }

  return {
    count, plus, minus
  }
}
