import React, { useState } from 'react'

export default function useCopy(text) {

    const [copied, setCopied] = useState(false)
    console.log("kopi: "+copied)

    const copy = () => {
        navigator.clipboard.writeText(text)
            .then(() => setCopied(true))
            .catch(()=> setCopied(false))
    }


    return [
        copied, copy
    ]
}
