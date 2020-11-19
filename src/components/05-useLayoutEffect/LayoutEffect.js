import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './effects.css'

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    return (
        <div>
            <h2>LayoutEffect</h2>
            <hr/>

            <blockquote className="blockquote text-right">
                <p className="mb-0">{ quote }</p>
            </blockquote>
                    
            

            <button onClick={ increment } className="btn btn-primary">
                Siguinete quote
            </button>

        </div>
    )
}
