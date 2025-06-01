import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { APIVersion1GetProducts } from "../v1";
import { ModelsType, Product } from "./useSearchProducts";

const useSearchProducts = () => {
  return useMutation<
    AxiosResponse<Product[]>,
    AxiosError<Error>,
    {
      queryKey: string;
      items_no: number;
      models: ModelsType;
    }
  >({
    mutationFn: APIVersion1GetProducts,
  });
};

export default useSearchProducts;
