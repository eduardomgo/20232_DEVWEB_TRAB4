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
import useCadastrarProduto from "../../hooks/produto/useCadastrarProduto";
import IProdutoForm from "../../interfaces/forms/produtoForm";
interface IProps {
  produto: Produto | null | undefined;
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
    nome: produto?.nome || '',
    imagem: produto?.imagem || '',
    descricao: produto?.descricao || '',
    disponivel: produto?.disponivel || '',
    qtdEstoque: produto?.qtdEstoque || 0,
    categoriaId: produto?.categoria.id ? `${produto.categoria.id}` : '',
    preco: produto?.preco || 0
  });

  const {mutate: cadastrarProduto, isLoading: isLoadingCadastrarProduto} = useCadastrarProduto();
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
    const new_product: IProdutoForm = {
      nome: values['nome'],
      imagem: values['imagem'],
      descricao: values['descricao'],
      disponivel: values['disponivel'],
      qtdEstoque: values['qtdEstoque'],
      preco: values['preco'],
      categoria: {
        id: values.categoriaId
      }
    }
    if (produto) {
      alterarProduto({id: produto.id, ...new_product});
      navigate(`/produtos/${produto.id}`);
    } else {
      cadastrarProduto(new_product);
      navigate(`/`);
    } 
  }

  const removeAndRedirect = () => {
    if (produto) {
      removerProduto(produto.id);
      navigate(`/`);
    }
  }

  return (
    <div>
      {produto &&
        <button 
          className="btn btn-danger"
          onClick={removeAndRedirect} 
          disabled={isLoadingRemoverProduto}
        >
          {isLoadingRemoverProduto? 'Removendo...' : 'Remover'}
        </button>
      }

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
          type="text"
          labelText='Imagem'
          name='imagem'
          value={values['imagem']}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(setValues, setErrors, event)}
          placeholder='Digite a imagem do produto'
          invalid={errors?.imagem}
          supportText={errors?.imagem?.message}
        />
        <TextInput
          type="text"
          labelText='Categoria ID'
          name='categoriaId'
          value={values['categoriaId']}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(setValues, setErrors, event)}
          placeholder='Digite a categoria do produto'
          invalid={errors?.categoriaId}
          supportText={errors?.categoriaId?.message}
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
          {isLoadingCadastrarProduto || isLoadingAlterarProduto ? 'Salvando...' : 'Salvar'}
        </button>      
      </form>
    </div>
  );
};
export default ProdutoForm;
