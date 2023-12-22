import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produto from "../../interfaces/produto";
import { onChange } from "../../util/helper";
import useRemoverProduto from "../../hooks/produto/useRemoverProduto";
import TextInput from "../atoms/TextInput";
import useAlterarProduto from "../../hooks/produto/useAlterarProduto";

interface IProps {
  produto: Produto;
}

const ProdutoForm = (props: IProps) => {
  const { produto } = props;

  const navigate = useNavigate();

  const [errors, setErrors] = useState<any>(null);
  const [values, setValues] = useState({
    nome: produto.nome,
    descricao: produto.descricao,
    disponivel: produto.disponivel,
    qtdEstoque: produto.qtdEstoque,
    preco: produto.preco
  });

  const {mutate: alterarProduto, isLoading: isLoadingAlterarProduto} = useAlterarProduto();
  const {mutate: removerProduto, isLoading: isLoadingRemoverProduto} = useRemoverProduto();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updated_product = {
      ...produto,
      ...values
    }
    alterarProduto(updated_product);
    navigate(`/produtos/${produto.id}`);
  }

  const removeAndRedirect = () => {
    removerProduto(produto.id);
    navigate(`/produtos/${produto.id}`);
  }

  return (
    <div>
      <button onClick={removeAndRedirect} disabled={isLoadingRemoverProduto}>{isLoadingRemoverProduto? 'Removendo...' : 'Remover'}</button>

      <form onSubmit={onSubmit}>
        <TextInput
          type="text"
          labelText='Nome'
          name='nome'
          value={values['nome']}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(setValues, setErrors, event)}
          placeholder='Digite o nome do produto'
          invalid={errors?.nome}
          supportText={errors?.nome?.message}
        />
        <button 
          disabled={isLoadingAlterarProduto || values['nome'] === ''}
          type={'submit'}
        >
          <p>{isLoadingAlterarProduto ? 'Salvando...' : 'Salvar'}</p>
        </button>      
      </form>
    </div>
  );
};
export default ProdutoForm;
