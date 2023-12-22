import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "../useApi";
import IItemForm from "../../interfaces/forms/itemForm";


const useCadastrarItem = () => {
  const { cadastrar } = useApi<IItemForm>('/item-de-carrinho');
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: IItemForm) => cadastrar(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useCadastrarItem;
