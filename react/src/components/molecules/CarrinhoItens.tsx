import Item from "../../interfaces/item";
import CarrinhoItem from "../atoms/CarrinhoItem";

interface IProps {
  itens: Item[];
}

const CarrinhoItens = (props: IProps) => {
  const { itens } = props;
  
  return (
    <div>
      <h3>PRODUTO E SERVIÇO</h3>
      {itens.length === 0 && <p>Nenhum produto no carrinho</p>}
      {itens.map((item) => (
        <div key={item.id}>
          <CarrinhoItem 
            item={item} 
          />
        </div>
      ))}
    </div>
  );
};
export default CarrinhoItens;
