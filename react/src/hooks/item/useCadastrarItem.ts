import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "../useApi";


const useCadastrarItem = () => {
  const { cadastrar } = useApi<ItemForm>('/item-de-carrinho');
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: ItemForm) => cadastrar(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useCadastrarItem;
