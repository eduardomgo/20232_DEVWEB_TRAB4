import { useState } from "react";
import Item from "../../interfaces/item";
import { formatCurrency } from "../../util/helper";

interface IProps {
  item: Item;
}

const CarrinhoItem = (props: IProps) => {
  const { item } = props;

  const [quantidade, setQuantidade] = useState(1);

  const updateQuantidade = (nova_quantidade: number) => {
    setQuantidade(nova_quantidade);
  }

  const removeItem = () => {
    setQuantidade(0);
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
        <div className="col-2">
          <button onClick={() => updateQuantidade(quantidade + 1)}>+</button>
          <p>{quantidade}</p>
          <button onClick={() => updateQuantidade(quantidade - 1)}>-</button>
          <button onClick={() => removeItem()}>Remover</button>
        </div>
        <div className="col-2">
          <p>Valor total:</p>
          <p>{formatCurrency(quantidade * item.produto.preco)}</p>
        </div>
      </div>
    </div>
  );
};
export default CarrinhoItem;
