import React from 'react';
import axios from 'axios';

function CardCriarCarro({ carros }) {
  
  const criarCarro = async e => {
    e.preventDefault();
    const novoCarro = new FormData(e.target);
    const carroData = {
      nome: novoCarro.get('nome'),
      ano: novoCarro.get('ano'),
      potencia: novoCarro.get('potencia'),
      preco: novoCarro.get('preco'),
      fabricante: novoCarro.get('fabricante')
    };

    try {
      await axios.post('https://ifsp.ddns.net/webservices/carro/carro', carroData);
      alert('Carro criado com sucesso');
      window.location.href = '/'; 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Criar Carro</h1>
      <form onSubmit={criarCarro}>
        <div>
          <label htmlFor="nome">Nome do Carro:</label>
          <input type="text" name="nome"/>
        </div>
        <div>
          <label htmlFor="ano">Ano:</label>
          <input type="number" name="ano"/>
        </div>
        <div>
          <label htmlFor="potencia">Potência:</label>
          <input type="number" name="potencia"/>
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input type="number" name="preco"/>
        </div>
        <div>
          <label htmlFor="fabricante">Fabricante:</label>
          <input type="text" name="fabricante"/>
        </div>
        <button type="submit">{'Criar'}</button>
      </form>
    </div>
  );
}

export default CardCriarCarro;
