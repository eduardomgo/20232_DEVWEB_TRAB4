import { useMutation, useQueryClient } from "@tanstack/react-query";
import Item from "../../interfaces/item";
import useApi from "../useApi";

const useRemoverItem = () => {
  const { removerPorId } = useApi<Item>(`/item-de-carrinho`);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => removerPorId(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useRemoverItem;
