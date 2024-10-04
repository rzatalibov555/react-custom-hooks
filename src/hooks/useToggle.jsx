
import { useState } from 'react'


export default function useToggle() {
  
    const [open, setOpen] = useState(false)
  
  
    function change() {
        setOpen(!open)
    }

    return {
        open, change
    }
}
