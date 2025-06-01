"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { APIVersion1GetProducts } from "../v1";

export interface Images {
  hi_res: string[];
  large: string[];
  thumb: string[];
  variant: string[];
}

export interface Product {
  parent_asin: string;
  main_category: string;
  title: string;
  average_rating: number;
  rating_number: number;
  description: string[];
  price: number;
  images: Images;
  store: string;
  categories: string[];
}

export interface ModelsType {
  content: number;
  sentiment: number;
  als?: number;
}

const useSearchProducts = () => {
  return useMutation<
    AxiosResponse<Product[]>,
    AxiosError<Error>,
    {
      query: string;
      items_no: number;
      models: ModelsType;
    }
  >({
    mutationFn: APIVersion1GetProducts,
  });
};

export default useSearchProducts;
