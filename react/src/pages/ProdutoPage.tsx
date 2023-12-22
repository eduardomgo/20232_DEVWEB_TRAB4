import { useNavigate, useParams } from "react-router-dom";
import useProduto from "../hooks/useProduto";
import { formatCurrency } from "../util/helper";

const ProdutoPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: produto, isLoading: isLoadingProduto } = useProduto(id || ""); 

  if (isLoadingProduto) return <h6>Carregando...</h6>;

  const addToCart = () => {
    navigate("/carrinho");
  }

  // if (errorAdicionaItem) throw errorAdicionaItem;

  return (
    <div className="row">
      <h4>{produto?.categoria.nome}: {produto?.nome}</h4>
      <div className="col-4">
        <img src={`/${produto?.imagem}`} className="card-img-top" style={{ width: "300px" }} />
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-8">
            <p>Vendido e entregue por <span>Eduardo</span> | Em estoque: {produto?.qtdEstoque}</p>
            <h2>{formatCurrency(produto?.preco)}</h2>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-6">
                {produto?.disponivel &&
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart()}
                  >
                    <p>Comprar</p>
                  </button>
                }
              </div>
              <div className="col-6">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/admin/produtos/${id}`)}
                >
                  <p>Editar</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default ProdutoPage;
