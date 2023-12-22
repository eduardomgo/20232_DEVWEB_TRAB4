import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_PRODUTOS } from "../../util/constants";
import useApi from "../useApi";
import IProdutoForm from "../../interfaces/forms/produtoForm";

const useAlterarProduto = () => {
  const { alterar } = useApi<IProdutoForm>(URL_PRODUTOS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (produto: IProdutoForm) => alterar(produto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["produtos"],
      });
    },
  });
};

export default useAlterarProduto;
