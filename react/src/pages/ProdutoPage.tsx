import { useNavigate, useParams } from "react-router-dom";
import useProduto from "../hooks/produto/useProduto";
import { formatCurrency } from "../util/helper";
import useCadastrarItem from "../hooks/item/useCadastrarItem";

const ProdutoPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: produto, isLoading: isLoadingProduto } = useProduto(id || ""); 
  const { mutate: cadastrarItem } = useCadastrarItem();

  if (isLoadingProduto) return <h6>Carregando...</h6>;

  const addToCart = () => {
    if (produto) {
      const new_item: ItemForm = { 
        carrinho: {
          id: 1,
        },
        produto: {
          id: produto.id,
        },
        quantidade: 1  
      }
      cadastrarItem(new_item);
      navigate("/carrinho");
    }
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Produto {id}</li>
        </ol>
      </nav>
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
                      Adicionar
                    </button>
                  }
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/admin/produtos/${id}`)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default ProdutoPage;
