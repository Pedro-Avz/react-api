import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditCarro() {

  //PEGAR O ID PELA URL E PASSAR NO USEEFFECT
  const { id } = useParams(); 

  const [carro, setCarro] = useState({
    nome: '',
    ano: 0,
    potencia: 0,
    preco: 0,
    fabricante: ''
  });


  //PEGAR OS DADOS DO CARRO PELO ID E MOSTRAR NO NAVEGADOR
  useEffect(() => {
    axios.get(`https://ifsp.ddns.net/webservices/carro/carro/${id}`)
      .then(response => {
        setCarro(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  //ATUALIZAR AS MUDANÇAS FEITAS NOS INPUTS DO FORMS
  const handleChange = e => {
    const { name, value } = e.target;
    setCarro(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const editarCarro = async e => {
    e.preventDefault();
    try {
      await axios.put(`https://ifsp.ddns.net/webservices/carro/carro/${id}`, carro);
      alert('Carro atualizado com sucesso');
      window.location.href = '/'; 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Atualizar Carro</h1>
      <form onSubmit={editarCarro}>
        <div>
          <label htmlFor="nome">Nome do Carro:</label>
          <input type="text" name="nome" value={carro.nome} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ano">Ano:</label>
          <input type="number" name="ano" value={carro.ano} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="potencia">Potência:</label>
          <input type="number" name="potencia" value={carro.potencia} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input type="number" name="preco" value={carro.preco} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="fabricante">Fabricante:</label>
          <input type="text" name="fabricante" value={carro.fabricante} onChange={handleChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default EditCarro;
