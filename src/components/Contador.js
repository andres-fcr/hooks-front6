import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import UseCounter from './UseCounter'

const Contador = () => {

    const { Counter,
        handleSumar,
        handleRestar,
        handleReset } = UseCounter(5)
         
    return (
        <div>
            <h1>Contador: {Counter}</h1>
            <Button variant="primary" onClick={handleSumar}>Sumar</Button>
            <Button variant="primary" onClick={handleRestar}>Restar</Button>
            <Button variant="primary" onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default Contador


