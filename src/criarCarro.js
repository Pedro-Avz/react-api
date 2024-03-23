import axios from 'axios';

async function criarCarro() {
  const url = 'https://ifsp.ddns.net/webservices/carro/carro';
  const dadosCarro = {
    nome: 'Gol',
    ano: 2005,
    potencia: 1400,
    preco: 20000,
    fabricante: 'Volks'
  };

  try {
    const resposta = await axios.post(url, dadosCarro);
    console.log('Carro criado com sucesso:', resposta.data);
  } catch (erro) {
    console.error('Erro ao criar carro:', erro.message);
  }
}

criarCarro();
