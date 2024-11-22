import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { createUser } from './../../api/user';

export default function Register() {
    const navigate = useNavigate()

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ idRole, setIdRole ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await createUser({ name: name, email: email, password: password, phone: phone, idRole: 1 })

        if (response.msg.id) {
            navigate('/login')
        } else {
            alert('Não foi possível cadastrar um novo usuário!')
        }
    }

    return(
        <>
        <div id='container-register'>
            <form id='register-form'>
                <input id='name' required value={ name } type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input id='email' required value={ email } type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                <input id='password' required value={ password } type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <input id='phone' required value={ phone } type="number" placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                <button id='Register-button' type='submit' onClick={ handleSubmit }>
                    Registrar
                </button>
            </form>
        </div>
        </>
    )
}