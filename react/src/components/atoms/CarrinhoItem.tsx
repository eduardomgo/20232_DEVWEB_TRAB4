import { useState } from "react";
import Item from "../../interfaces/item";
import { formatCurrency } from "../../util/helper";
import useAlterarItem from "../../hooks/item/useAlterarItem";
import useRemoverItem from "../../hooks/item/useRemoverItem";
import IItemForm from "../../interfaces/forms/itemForm";

interface IProps {
  item: Item;
}

const CarrinhoItem = (props: IProps) => {
  const { item } = props;

  const [quantidade, setQuantidade] = useState(item.quantidade);

  const {mutate: alterarItem, isLoading: isLoadingAlterarItem} = useAlterarItem(item.id);
  const {mutate: removerItem, isLoading: isLoadingRemoverItem} = useRemoverItem();

  const updateQuantidade = (nova_quantidade: number) => {
    if (nova_quantidade > 0) {
      setQuantidade(nova_quantidade);
      const updated_item: IItemForm = {
        carrinho: {
          id: item.carrinhoId,
        },
        produto: {
          id: item.produto.id,
        },
        quantidade: nova_quantidade
      }
      alterarItem(updated_item);
    } else removerItem(item.id);
  }

  return (
    <div>
      <p>Vendido e entregue por: Eduardo</p>
      <div className="row">
        <div className="col-3">
          <img src={`/${item.produto.imagem}`} className="card-img-top" style={{ width: "100px" }} />
        </div>
        <div className="col-5">
          <h5>{item.produto.nome}</h5>
          <p>{item.produto.descricao}</p>
        </div>
        {isLoadingAlterarItem && <p>Alterando...</p>}
        {isLoadingRemoverItem && <p>Removendo...</p>}
        {!isLoadingAlterarItem && !isLoadingRemoverItem && 
          <div className="col-2">
            <div className="row">
              <div className="col-4">
                <button className="btn btn-secondary" disabled={isLoadingAlterarItem} onClick={() => updateQuantidade(quantidade + 1)}>+</button>
              </div>
              <div className="col-4">
                <p>{quantidade}</p>
              </div>
              <div className="col-4">
                <button className="btn btn-secondary" disabled={isLoadingAlterarItem} onClick={() => updateQuantidade(quantidade - 1)}>-</button>
              </div>
            </div>
            <button className="btn btn-danger" disabled={isLoadingRemoverItem} onClick={() => removerItem(item.id)}>Remover</button>
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
