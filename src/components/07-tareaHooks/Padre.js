import React, { useCallback, useState } from 'react'
import './effects.css';
import { Hijo } from './Hijo';

export const Padre = () => {

    const numeros = [ 2,4,6,8,10 ];

    const [valor, setValor] = useState(0);

    // const increment = (num) => {
    //     setValor( valor + num );
    // }
    
    const incrementar = useCallback( ( num ) => {
        
        setValor( v => v + num )

    }, [ setValor ] )

    return (
        <div>
            <h2>Padre</h2>
            <p>Total: { valor }</p>
            <hr/>

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ) )
            }

        </div>
    )
}
