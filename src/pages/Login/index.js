import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '/.style.css';
import api from '../../services/api';
import logoImage from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();

        const data = {
            username,
            password
        };

        try{
            const reponse = await api.post('auth/signin', data)
            localStorage.setItem('username',username );
            localStorage.setItem('acessToken', reponse.data.accessToken);
            localStorage.setItem('refreshToken', reponse.data.refreshToken);

            history.push('/books');
        }catch(error) {
            alert('Login falhou!')
        }
    };

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Mecado Livro" />
                <form onSubmit={login}>
                    <h1>Acesse sua conta</h1>
                    <input
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>
                </form>

            </section>

            <img src={padlock} alt="Login" />

        </div>
    )
}