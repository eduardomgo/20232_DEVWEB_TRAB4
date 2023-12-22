import { useMutation, useQueryClient } from "@tanstack/react-query";
import Item from "../../interfaces/item";
import { URL_ITENS } from "../../util/constants";
import useApi from "../useApi";


const useAlterarItem = () => {
  const { alterar } = useApi<Item>(URL_ITENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: Item) => alterar(item, item.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useAlterarItem;
