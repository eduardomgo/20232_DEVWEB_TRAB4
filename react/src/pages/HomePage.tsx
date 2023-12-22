import { NavLink, useNavigate, useParams } from "react-router-dom";
import useCategorias from "../hooks/useCategorias";
import InfiniteScroll from "react-infinite-scroll-component";
import useProdutosPaginadosPorSlugDaCategoria from "../hooks/produto/useProdutosPaginadosPorSlugDaCategoria";
import Card from "../components/atoms/Card";

const HomePage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  const { data: categorias, isLoading: isLoadingCategorias } = useCategorias();

  const { 
    data: data_produtos, 
    isLoading: isLoadingProdutos, 
    fetchNextPage: fetchNextProductPage, 
    hasNextPage: hasNextProductPagem 
  } = useProdutosPaginadosPorSlugDaCategoria({tamanho: 12, slug});
  const getQtdProdutos = data_produtos?.pages.reduce((total, page) => total + page.itens.length, 0) || 0;

  if (isLoadingCategorias || isLoadingProdutos) return <h6>Carregando...</h6>;

  return (
    <div className="row">
      <div className="col-lg-2">
        <h5>Categorias</h5>
        <div className="nav flex-column nav-pills">
          <NavLink aria-current="page" className="nav-link" to="/">
            Todos
          </NavLink>
          {categorias?.map((categoria) => (
            <NavLink className="nav-link" to={`/${categoria.slug}`}>
              {categoria.nome}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="col-lg-10">
        <InfiniteScroll
          dataLength={getQtdProdutos}
          hasMore={!!hasNextProductPagem}
          next={() => fetchNextProductPage()}
          loader={<h6>Carregando...</h6>}
          style={{overflow: "visible"}}>
          <h5>Produtos</h5>
          <div className="row">
            {data_produtos?.pages.map((page) =>
              page.itens.map((produto) => (
                <div 
                  key={produto.id} 
                  className="col-xl-2 col-md-3 col-sm-4 col-6 "
                >
                  <Card
                    imagem={produto.imagem}
                    titulo={produto.nome}
                    texto1={produto.descricao}
                    texto2={produto.preco.toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                      useGrouping: true,
                    })}
                    onClick={() => navigate(`/produtos/${produto.id}`)}
                    footer={<input type="button" className="btn btn-primary w-100" value="Comprar" />}
                  />
                </div>
              ))
            )}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default HomePage;
