import { useParams } from "react-router-dom";
import Paginacao from "../components/molecules/Paginacao";
import Pesquisa from "../components/molecules/Pesquisa";
import TabelasDeProdutos from "../components/molecules/TabelasDeProdutos";
import ProdutoForm from "../components/organisms/ProdutoForm";
import useProduto from "../hooks/produto/useProduto";

const AdminProdutoPage = () => {
  const { id } = useParams();

  const { data: produto, isLoading: isLoadingProduto } = useProduto(id || ""); 

  if (isLoadingProduto) return <h6>Carregando...</h6>;

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

      <div className="mb-4">
        <h3>Gerenciamento do Produto: {produto?.id}</h3>
        <hr className="mt-0" />
      </div>

      {produto &&
        <ProdutoForm 
          produto={produto}
        />
      }

      <div className="mb-4">
        <h5>Lista de Produtos</h5>
        <hr className="mt-0" />
      </div>
      <Pesquisa />
      <TabelasDeProdutos />
      <Paginacao />
    </div>
  );
};
export default AdminProdutoPage;
