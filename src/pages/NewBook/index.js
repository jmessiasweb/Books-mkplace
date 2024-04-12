import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import api from '../../services/api';
import './styles.css'
import logoImage from '../../assets/logo.svg';


export default function NewBook() {

    //cadastro do livro
    const [author, setAuthor] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    const history = useHistory();

    const acessToken = localStorage.setItem('acessToken');

    const authorization = {
        headers: {
            authorization: `Bearer ${acessToken}`
        }
    };

    async function createNewBook(e) {
        e.preventDefault();

        const data = {
            author,
            launchDate,
            price,
            title
        };

        try {
            await api.post('api/book/v1', data, authorization);
            history.push('/books');
        } catch (error) {
            alert('Books falhou!')
        }
        history.push('/books');
    };
    return (
        <div className="New-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="New Books" />
                    <h1>Adicione Novo Livro</h1>
                    <p>Insira as informações do livro e clique em 'adicionar'!</p>
                    <Link className="black-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5" />
                        HOME
                    </Link>
                </section>
                <form onSubmit={createNewBook}>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="Autor"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <input
                        type="Data"
                        value={launchDate}
                        onChange={e => setLaunchDate(e.target.value)}
                    />

                    <input
                        placeholder="Preço"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <button className="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}