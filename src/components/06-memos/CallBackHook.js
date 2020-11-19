import React, { useState } from 'react'
import './effects.css';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter( counter + 1 );
    }

    
    

    return (
        <div>
            <h2>CallBackHook</h2>
            <hr/>
        </div>
    )
}
