import { useState } from "react";
import Item from "../../interfaces/item";
import { formatCurrency } from "../../util/helper";
import { useNavigate } from "react-router";
import useProduto from "../../hooks/produto/useProduto";
import useAlterarItem from "../../hooks/item/useAlterarItem";
import useRemoverItem from "../../hooks/item/useRemoverItem";

interface IProps {
  item: Item;
}

const CarrinhoItem = (props: IProps) => {
  const { item } = props;

  const navigate = useNavigate();

  const [quantidade, setQuantidade] = useState(item.produto.qtdEstoque);

  const { data: produto } = useProduto(`${item.produto_id}`); 
  const {mutate: alterarItem, isLoading: isLoadingAlterarItem} = useAlterarItem();
  const {mutate: removerItem, isLoading: isLoadingRemoverItem} = useRemoverItem();

  const updateQuantidade = (nova_quantidade: number) => {
    setQuantidade(nova_quantidade);
    const updated_item = {
      ...item,
      quantidade: nova_quantidade
    }
    alterarItem(updated_item);
    navigate(`/carrinho`);
  }

  const removeItem = () => {
    removerItem(item.id);
    navigate(`/carrinho`);
  }

  return (
    <div>
      <p>Vendido e entregue por: Eduardo</p>
      <div className="row">
        <div className="col-3">
          <img src={`/${produto?.imagem}`} className="card-img-top" style={{ width: "100px" }} />
        </div>
        <div className="col-5">
          <h5>{produto?.nome}</h5>
          <p>{produto?.descricao}</p>
        </div>
        {isLoadingAlterarItem && <p>Alterando...</p>}
        {isLoadingRemoverItem && <p>Removendo...</p>}
        {!isLoadingAlterarItem && !isLoadingRemoverItem && 
          <div className="col-2">
            <button onClick={() => updateQuantidade(quantidade + 1)}>+</button>
            <p>{quantidade}</p>
            <button onClick={() => updateQuantidade(quantidade - 1)}>-</button>
            <button onClick={() => removeItem()}>Remover</button>
          </div>
        }
        <div className="col-2">
          <p>Valor total:</p>
          <p>{formatCurrency(quantidade * item.produto.preco)}</p>
        </div>
      </div>
    </div>
  );
};
export default CarrinhoItem;
