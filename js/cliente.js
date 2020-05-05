const informacoesClientes = [
  {
    cpf: 12345678545,
    nome: "Ana",
  },
  {
    cpf: 98765345671,
    nome: "Julia",
  },
];

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {
  const linha = document.createElement('tr');

  const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
 `;

  linha.innerHTML = conteudoLinha;

  return linha;
};

informacoesClientes.forEach((indice) => {
  corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
});
