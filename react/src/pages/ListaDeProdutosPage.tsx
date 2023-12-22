import CadastroDeProdutosForm from "../components/organisms/CadastroDeProdutosForm";
import Paginacao from "../components/molecules/Paginacao";
import Pesquisa from "../components/molecules/Pesquisa";
import TabelasDeProdutos from "../components/molecules/TabelasDeProdutos";

const ListaDeProdutosPage = () => {
  return (
    <>
      <div className="mb-4">
        <h5>Cadastro de Produtos</h5>
        <hr className="mt-0" />
      </div>

      <CadastroDeProdutosForm />

      <div className="mb-4">
        <h5>Lista de Produtos</h5>
        <hr className="mt-0" />
      </div>
      
      <Pesquisa />
      <TabelasDeProdutos />
      <Paginacao />
    </>
  );
};
export default ListaDeProdutosPage;
