import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomePage = () => {

    const { user } = useContext( UserContext );

    console.log(user)

    return (
        <div>
            <h2>HomePage</h2>
            <hr/>

            <pre className="container">
                { JSON.stringify( user, null, 3 ) }
            </pre>

        </div>
    )
}
