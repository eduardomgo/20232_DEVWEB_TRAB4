import { useEffect, useState } from "react";
import Item from "../interfaces/item";
import CarrinhoResumo from "../components/molecules/CarrinhoResumo";
import CarrinhoItens from "../components/molecules/CarrinhoItens";

const ITEMS: Item[] = []

const CarrinhoPage = () => {
  const [total_amount, setTotalAmount] = useState(0);
  const [total_value, setTotalValue] = useState(0);
  
  useEffect(() => {
    setTotalAmount(ITEMS.reduce((acc, item) => acc + item.quantidade, 0));
    setTotalValue(ITEMS.reduce((acc, item) => acc + item.quantidade * item.produto.preco, 0));
  }, []);

  return (
    <div className="row">
      <div className="col-10">
        <CarrinhoItens 
          itens={ITEMS}
        />
      </div>
      <div className="col-2">
        <CarrinhoResumo 
          total_amount={total_amount}
          total_value={total_value}
        />
      </div>
    </div>
  );
};
export default CarrinhoPage;
