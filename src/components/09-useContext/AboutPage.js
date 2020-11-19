import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutPage = () => {

    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({})
    }
    

    return (
        <div>
            <h2>AboutPage</h2>
            <hr/>

            <pre className="container">
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                className="btn btn-outline-warning"
                onClick={ handleClick }
            >
                Logout
            </button>
        </div>
    )
}
