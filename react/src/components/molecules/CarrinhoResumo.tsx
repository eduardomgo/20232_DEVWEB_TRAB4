import { formatCurrency } from "../../util/helper";

interface IProps {
  total_amount: number;
  total_value: number;
}

const CarrinhoResumo = (props: IProps) => {
  const { total_amount, total_value } = props;
  
  return (
    <div>
      <h3>RESUMO</h3>
      <p>Quantidade: {total_amount}</p>
      <p>Valor total: {formatCurrency(total_value)}</p>
    </div>
  );
};
export default CarrinhoResumo;
