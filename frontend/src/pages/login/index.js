import React, { useState, useImperativeHandle } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css'
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch (error) {
            alert('Erro no login, tente novamente');
        }
    }

    return (
        <div className="login-container">
            <session className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça o seu Login</h1>
                    <input placeholder="ID"
                        value={id}
                        onChange={e => { setId(e.target.value) }}

                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Criar registo
                    </Link>

                </form>

            </session>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}