import { createAlova } from "alova";
import { axiosRequestAdapter } from "@alova/adapter-axios";
import reactHook from "alova/react";

const configAlova = createAlova({
  baseURL: "https://rickandmortyapi.com/api",
  requestAdapter: axiosRequestAdapter(),
  timeout: 5000,
  statesHook: reactHook,
});

export default configAlova;
