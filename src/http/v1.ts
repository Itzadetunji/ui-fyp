import { AxiosResponse } from "axios";
import { ModelsType, Product } from "./slices/useSearchProducts";
import $http from ".";

export const APIVersion1GetProducts = async (payload?: {
  queryKey: string;
  items_no: number;
  models: ModelsType;
}): Promise<AxiosResponse<Product[]>> =>
  $http.post(`/api/v1/search`, payload).then((res) => res);
