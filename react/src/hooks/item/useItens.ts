import { useQuery } from "@tanstack/react-query";
import Item from "../../interfaces/item";
import { URL_ITENS } from "../../util/constants";
import useApi from "../useApi";

const useItens = (carrinho_id: number) => {
  const { recuperar } = useApi<Item[]>(`${URL_ITENS}/${carrinho_id}`);

  return useQuery({
    queryKey: ["itens"],
    queryFn: () => recuperar(),
    staleTime: 7 * 24 * 60 * 60 * 1000,
    keepPreviousData: true,
  });
};
export default useItens;