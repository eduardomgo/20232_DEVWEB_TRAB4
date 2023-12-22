import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produto from "../../interfaces/produto";
import { onChange } from "../../util/helper";
import useRemoverProduto from "../../hooks/produto/useRemoverProduto";
import TextInput from "../atoms/TextInput";
import useAlterarProduto from "../../hooks/produto/useAlterarProduto";
import CheckInput from "../atoms/CheckInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
interface IProps {
  produto: Produto;
}

const ProdutoForm = (props: IProps) => {
  const { produto } = props;

  const navigate = useNavigate();

  const schema = z.object({
    nome: z
      .string()
      .min(1, { message: "O nome deve ser informado." })
      .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
    descricao: z.string().min(1, { message: "A descição deve ser informada." }),
    disponivel: z.boolean(),
    qtd_estoque: z
      .number({ invalid_type_error: "A quantidade em estoque deve ser informada." })
      .min(0, { message: "A quantidade em estoque deve ser maior do ue zero." }),
    preco: z
      .number({ invalid_type_error: "O preço deve ser informado." })
      .min(0.1, { message: "O preço deve ser maior ou igual a R$ 0.10" }),
  });

  type FormProduto = z.infer<typeof schema>;

  const [errors, setErrors] = useState<any>({});
  const [values, setValues] = useState({
    nome: produto.nome,
    descricao: produto.descricao,
    disponivel: produto.disponivel,
    qtdEstoque: produto.qtdEstoque,
    preco: produto.preco
  });

  const {mutate: alterarProduto, isLoading: isLoadingAlterarProduto} = useAlterarProduto();
  const {mutate: removerProduto, isLoading: isLoadingRemoverProduto} = useRemoverProduto();

  const { } = useForm<FormProduto>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      nome: "",
      descricao: ""
    },
  });

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
    navigate(`/`);
  }

  return (
    <div>
      <button 
        className="btn btn-danger"
        onClick={removeAndRedirect} 
        disabled={isLoadingRemoverProduto}
      >
        {isLoadingRemoverProduto? 'Removendo...' : 'Remover'}
      </button>

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
        <TextInput
          type="text"
          labelText='Descrição'
          name='descricao'
          value={values['descricao']}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(setValues, setErrors, event)}
          placeholder='Digite a descrição do produto'
          invalid={errors?.descricao}
          supportText={errors?.descricao?.message}
        />
        <TextInput
          type="number"
          labelText='Quantidade'
          name='qtdEstoque'
          value={values['qtdEstoque']}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(setValues, setErrors, event)}
          placeholder='Digite a quantidade do produto'
          invalid={errors?.qtdEstoque}
          supportText={errors?.qtdEstoque?.message}
        />
        <TextInput
          type="number"
          labelText='Preço'
          name='preco'
          value={values['preco']}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(setValues, setErrors, event)}
          placeholder='Digite o preço do produto'
          invalid={errors?.preco}
          supportText={errors?.preco?.message}
        />
        <CheckInput 
          type="checkbox"
          id="disponivel"
          name="disponivel"
          value={`${values['disponivel']}`}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(setValues, setErrors, event)}
          labelText='Disponível'
        />
        <button 
          className="btn btn-primary mt-3 mb-3"
          disabled={isLoadingAlterarProduto || values['nome'] === ''}
          type={'submit'}
        >
          {isLoadingAlterarProduto ? 'Salvando...' : 'Salvar'}
        </button>      
      </form>
    </div>
  );
};
export default ProdutoForm;
