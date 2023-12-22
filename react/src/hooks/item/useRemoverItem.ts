import { useMutation, useQueryClient } from "@tanstack/react-query";
import Item from "../../interfaces/item";
import { URL_ITENS } from "../../util/constants";
import useApi from "../useApi";

const useRemoverItem = () => {
  const { removerPorId } = useApi<Item>(URL_ITENS);
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
