import { useParams } from "react-router-dom";
import Card from "../components/Card";
import useProdutosPaginadosPorSlugDaCategoria from "../hooks/useProdutosPaginadosPorSlugDaCategoria";
import InfiniteScroll from "react-infinite-scroll-component";

const CardsDeProdutosPage = () => {
  const { slug } = useParams();
  const tamanho = 12;
  const { data, isLoading, error, fetchNextPage, hasNextPage } =

    useProdutosPaginadosPorSlugDaCategoria({
      tamanho,
      slug,
    });

  if (isLoading) return <h6>Carregando...</h6>;

  const getQtdProdutos = data?.pages.reduce((total, page) => total + page.itens.length, 0) || 0;

  if (error) throw error;

  return (
    <InfiniteScroll
      dataLength={getQtdProdutos}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<h6>Carregando...</h6>}
      style={{overflow: "visible"}}>
      <h5>Produtos</h5>
      <div className="row">
        {data?.pages.map((page) =>
          page.itens.map((produto) => (
            <div key={produto.id} className="col-xl-2 col-md-3 col-sm-4 col-6">
              <Card
                id={produto.id!}
                imagem={produto.imagem}
                titulo={produto.nome}
                texto1={produto.descricao}
                texto2={produto.preco.toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                  useGrouping: true,
                })}
                footer={<input type="button" className="btn btn-primary w-100" value="Comprar" />}
              />
            </div>
          ))
        )}
      </div>
    </InfiniteScroll>
  );
};

export default CardsDeProdutosPage;
