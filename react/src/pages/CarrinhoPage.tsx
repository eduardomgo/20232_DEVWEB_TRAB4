import { useEffect, useState } from "react";
import CarrinhoResumo from "../components/molecules/CarrinhoResumo";
import CarrinhoItens from "../components/molecules/CarrinhoItens";
import useItens from "../hooks/item/useItens";

const CarrinhoPage = () => {
  const [total_amount, setTotalAmount] = useState(0);
  const [total_value, setTotalValue] = useState(0);

  const { data: dataItens, isLoading: isLoadingItens } = useItens(1); 
  
  useEffect(() => {
    if (dataItens) {
      setTotalAmount(dataItens.itens.reduce((acc, item) => acc + item.quantidade, 0));
      setTotalValue(dataItens.itens.reduce((acc, item) => acc + item.quantidade * item.produto.preco, 0));
    }
  }, []);

  return (
    <div className="row">
      {isLoadingItens && <h6>Carregando...</h6>}
      <div className="col-10">
        {dataItens &&
          <CarrinhoItens 
            itens={dataItens.itens}
          />
        }
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
