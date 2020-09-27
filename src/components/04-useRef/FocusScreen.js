import React, { useRef } from 'react'
import './effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(ref)

    const handleClick = () => {
        inputRef.current.select();
    }
    

    return (
        <div>
            <h2>FocusScreen</h2>
            <hr/>

            <input
                ref={ inputRef }
                className="form-control"
                type="text"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-1"
                onClick={ handleClick }
            >Focus</button>
                
        </div>
    )
}
