import { AxiosResponse } from "axios";
import { ModelsType, Product } from "./slices/useSearchProducts";
import $http from ".";

export const APIVersion1GetProducts = async (payload?: {
  query: string;
  items_no: number;
  models: ModelsType;
}): Promise<AxiosResponse<Product[]>> =>
  $http.post(`/api/v1/search`, payload).then((res) => res);

export const APIVersion1GetRecommendedProducts = async (payload?: {
  items_no: number;
  user_id: string;
  models: ModelsType;
}): Promise<AxiosResponse<Product[]>> =>
  $http.post(`/api/v1/recommend`, payload).then((res) => res);
