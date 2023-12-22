interface IProdutoForm {
  id?: number,
  nome: string,
  descricao: string,
  preco: number,
  qtdEstoque: number,
  categoria: {
    id: string
  },
  imagem: string,
  disponivel: string | boolean,
  dataCadastro: string
}

export default IProdutoForm;