import {useRequest} from "alova/client";
import configAlova from "../Services/configAlova";
import { ApiResponse } from "./types";

const useRickAndMorty = (page: number) => {
  return useRequest(
    () => configAlova.Get<ApiResponse>(`/character?page=${page}`),
    {
      reactOptions: {
        suspense: true,
      },
    }
  );
};

export default useRickAndMorty;
