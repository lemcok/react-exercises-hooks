import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
    });

    const { counter1, counter2 }= state;

    console.log(counter1)
    // console.log(counter2)

    return (
        <div>
            <h2>Counter1 { counter1 }</h2>
            <h2>Counter2 { counter2 }</h2>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setState( {
                        ...state,
                        counter1: counter1 + 1
                    } )
                } }
            >+1</button>

        </div>
    )
}
