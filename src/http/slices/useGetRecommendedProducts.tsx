"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import {
  APIVersion1GetProducts,
  APIVersion1GetRecommendedProducts,
} from "../v1";
import { ModelsType, Product } from "./useSearchProducts";

const useGetRecommendedProducts = () => {
  return useMutation<
    AxiosResponse<Product[]>,
    AxiosError<Error>,
    {
      items_no: number;
      user_id: string;
      models: ModelsType;
    }
  >({
    mutationFn: APIVersion1GetRecommendedProducts,
  });
};

export default useGetRecommendedProducts;
