import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h2>CounterWithCustomHook: { counter }</h2>
            <hr/>

            <button 
                className="btn btn-primary mr-1"
                onClick={ decrement }
            >-1</button>

            <button 
                className="btn btn-primary mr-1"
                onClick={ reset }
            >Reset</button>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >+1</button>
        </>
    )
}
