import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListaCarros() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios.get('https://ifsp.ddns.net/webservices/carro/carro')
      .then(response => setCarros(response.data))
      .catch(error => console.error(error));
  }, []);

  const deletarCarro = (id) => {
    axios.delete(`https://ifsp.ddns.net/webservices/carro/carro/${id}`)
    .then(() => {
        alert('Carro deletado com sucesso');
        setCarros(carros.filter(carro => carro.id !== id));
    })
    .catch(error => console.error(error));
};


  return (
    <div>
      <h1>CARROS IFSP</h1>
      <Link to="/criar-carro">Criar Novo Carro</Link>
      {carros.map(carro => (
        <div key={carro.id}>
          <h3>{carro.nome}</h3>
          <p>Ano: {carro.ano}</p>
          <p>Potência: {carro.potencia}</p>
          <p>Preço: {carro.preco}</p>
          <p>Fabricante: {carro.fabricante}</p>
          <button onClick={() => deletarCarro(carro.id)}>Excluir</button>
          <button>
            <Link to={`/editar/${carro.id}`}>Editar</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaCarros;
