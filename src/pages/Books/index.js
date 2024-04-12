import React, {useState, useEffect} from  'react';
import {useHistory, Link} from 'react-router-dom';
import{FiPower, FiEdit, FiTrash2} from 'react-icons/fi';
import api from '../../services/api';
import './style.css';
import logoImage from '../../assets/logo.svg';


export default function Books() {
    return(
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Mkplace"/>
                <span>Bem Vindo, <strong>Josue</strong>!</span>
                <link className="button" to="book/new">Add novo Livro</link>

                <button type="button">
                    <FiPower size={18} color="#251FC5"/>
                </button>
            </header>

            <h1>Livros Registrados</h1>
            <ul>
                <li>
                    <strong>Titulo</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Preço</strong>
                    <p>R$ 47,90</p>
                    <strong>Data da Compra</strong>
                    <p>12/07/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>
                <li>
                    <strong>Titulo</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Preço</strong>
                    <p>R$ 47,90</p>
                    <strong>Data da Compra</strong>
                    <p>12/07/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>
                <li>
                    <strong>Titulo</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Preço</strong>
                    <p>R$ 47,90</p>
                    <strong>Data da Compra</strong>
                    <p>12/07/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}