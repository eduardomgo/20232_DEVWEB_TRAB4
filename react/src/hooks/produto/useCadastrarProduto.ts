import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_PRODUTOS } from "../../util/constants";
import useApi from "../useApi";
import IProdutoForm from "../../interfaces/forms/produtoForm";

const useCadastrarProduto = () => {
  const { cadastrar } = useApi<IProdutoForm>(URL_PRODUTOS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (produto: IProdutoForm) => cadastrar(produto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["produtos"],
      });
    },
  });
};

export default useCadastrarProduto;
