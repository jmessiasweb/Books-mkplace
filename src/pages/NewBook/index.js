import React from "react";
import './styles.css'
import logoImage from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";


export default function NewBook() {
    return(
        <div className="New-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="New Books"/>
                    <h1>Adicione Novo Livro</h1>
                    <p>Insira as informações do livro e clique em 'adicionar'!</p>
                    <Link className="black-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5"/>
                        HOME
                    </Link>
                </section>
                <form>
                    <input placeholder="Title"/>
                    <input placeholder="Autor"/>
                    <input type="Data"/>
                    <input placeholder="Preço"/>

                    <button className="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}