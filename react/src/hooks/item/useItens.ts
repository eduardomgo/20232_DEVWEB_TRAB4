import { useQuery } from "@tanstack/react-query";
import Item from "../../interfaces/item";
import useApi from "../useApi";

interface IData {
  itens: Item[];
}

const useItens = (carrinho_id: number) => {
  const { recuperar } = useApi<IData>(`/carrinhos/${carrinho_id}`);

  return useQuery({
    queryKey: ["itens"],
    queryFn: () => recuperar(),
    staleTime: 7 * 24 * 60 * 60 * 1000,
    keepPreviousData: true
  });
};
export default useItens;