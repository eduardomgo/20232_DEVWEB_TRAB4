import Produto from "./produto";

interface Item {
  id: number;
  carrinho_id: number;
  produto_id: number;
  quantidade: number;
  produto: Produto
}
export default Item;