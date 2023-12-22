import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "../useApi";


const useAlterarItem = (item_id: number) => {
  const { alterar } = useApi<ItemForm>(`/item-de-carrinho/${item_id}`);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: ItemForm) => alterar(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useAlterarItem;
