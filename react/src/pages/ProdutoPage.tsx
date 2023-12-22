import { useParams } from "react-router-dom";
import Card from "../components/Card";
import useProdutosPaginadosPorSlugDaCategoria from "../hooks/useProdutosPaginadosPorSlugDaCategoria";
import InfiniteScroll from "react-infinite-scroll-component";

const ProdutoPage = () => {
  const { id } = useParams();

  return (
    <div>
    </div>
  );
};

export default ProdutoPage;
