import Produto from "./produto";

interface Item {
  id: number;
  carrinhoId: number;
  produtoId: number;
  quantidade: number;
  produto: Produto
}
export default Item;