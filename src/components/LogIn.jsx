import React, { useState } from 'react'
import axios from 'axios'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
// import '../sass/forms.scss'


function NewUser() {
    const password = useInput()
    const email = useInput()
    const navigate = useNavigate()

    /* Preguntar cómo se hace con async/awit */
    const handlerSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3030/user/login', ({ email: email.value, password: password.value }))
            .then((res) => res.data)
            .then(() => navigate('/'))
            .catch(error => console.log(error))
    }

    return (
        <>
            <form className="form" onSubmit={handlerSubmit}>
                <h1 class='text-dark'>Log in</h1>
                <div class="mb-3">
                    <input type="email" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@email.com' {...email} />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control input" id="exampleInputPassword1" placeholder='Password' {...password} />
                </div>
                <button type="submit" class="btn btn-danger input btn-form btn-register">Log In</button>
            </form>
        </>
    );
}

export default NewUser;
