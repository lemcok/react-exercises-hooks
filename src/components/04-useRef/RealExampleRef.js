import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import './effects.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h2>RealExampleRef</h2>
            <hr/>

            { show && <MultipleCustomHooks /> }

            <button 
                className="btn btn-primary mt-2"
                onClick={ () => {
                    setShow( !show )
                } }
            >
                Show/Hide
            </button>

        </div>
    )
}
