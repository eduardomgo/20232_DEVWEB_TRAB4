import { useQuery } from "@tanstack/react-query";
import { URL_PRODUTOS } from "../../util/constants";
import useApi from "../useApi";
import Produto from "../../interfaces/produto";

const useProduto = (id: string) => {
  const { recuperar } = useApi<Produto>(`${URL_PRODUTOS}/${id}`);

  return useQuery({
    queryKey: ['produtos', `produto-${id}`],
    queryFn: () => recuperar()
  });
};

export default useProduto;