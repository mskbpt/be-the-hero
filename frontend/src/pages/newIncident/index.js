import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, SetValue] = useState(0);

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = { title, description, value, };

        try {
            await api.post('insidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');

        } catch (error) {
            alert('Erro no registo, tente novamente.');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Registar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso"
                        value={title}
                        onChange={e => { setTitle(e.target.value) }}
                    />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={e => { setDescription(e.target.value) }}
                    />
                    <input placeholder="Valor em euros"
                        value={value}
                        onChange={e => { SetValue(e.target.value) }}
                    />

                    <button className="button" type="submit">Registar</button>
                </form>
            </div>
        </div>
    )
}
