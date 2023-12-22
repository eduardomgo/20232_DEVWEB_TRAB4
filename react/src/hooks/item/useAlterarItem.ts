import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "../useApi";
import IItemForm from "../../interfaces/forms/itemForm";


const useAlterarItem = (item_id: number) => {
  const { alterar } = useApi<IItemForm>(`/item-de-carrinho/${item_id}`);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: IItemForm) => alterar(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useAlterarItem;
