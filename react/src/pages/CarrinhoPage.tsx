import { useEffect, useState } from "react";
import Produto from "../interfaces/produto";

const CarrinhoPage = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [values, setValues] = useState(1);

  useEffect(() => {
    setProdutos([
      {
        id: 1, 
        categoria: {
          id: 1,
          nome: 'Livros',
          slug: 'livros'
        },
        imagem: '',
        nome: 'O Senhor dos Anéis',
        descricao: 'Descrição do produto',
        disponivel: true,
        dataCadastro: new Date(),
        qtdEstoque: 10,
        preco: 30
      }
    ]);
  }, []);

  return (
    <div>
      Carrinho
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <button onClick={() => setValues(values + 1)}>+</button>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <th scope="row">{produto.id}</th>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CarrinhoPage;
