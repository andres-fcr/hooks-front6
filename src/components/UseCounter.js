import { useState } from 'react'

const UseCounter = (value = 10) => {

    const [Counter, setCounter] = useState(value)

    const handleSumar = () => {
        setCounter(Counter + 1)
    }

    const handleRestar = () => {
        setCounter(Counter - 1)
    }

    const handleReset = () => {
        setCounter(0)
    }


    return {
        Counter,
        handleSumar,
        handleRestar,
        handleReset
    }
}

export default UseCounter
