import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginPage = () => {

    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h2>LoginPage</h2>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 123,
                    name: 'Ricardo',
                    email: 'rik.fm1809@gmail.com'
                }) }
            >
                Registrar
            </button>
        </div>
    )
}
