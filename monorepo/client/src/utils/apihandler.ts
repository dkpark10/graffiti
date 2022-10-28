import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
});

interface Error {
  status: number;
}

export const httpFetchData = async <T>(
  url: string,
  option?: AxiosRequestConfig
): Promise<AxiosResponse<T, any>> => {
  return await httpClient.get<T>(url, option);
};

export const httpPostData = async <T>(
  url: string,
  payload: T,
  option?: AxiosRequestConfig
): Promise<AxiosResponse<T, any>> => {
  return await httpClient.post(url, payload, option);
};

export const httpUpdatetData = async <T>(
  url: string,
  payload: T,
  option?: AxiosRequestConfig
): Promise<AxiosResponse<T, any>> => {
  return await httpClient.put(url, payload, option);
};

export const httpDeletetData = async <T>(
  url: string,
  option?: AxiosRequestConfig
): Promise<AxiosResponse<T, any>> => {
  return await httpClient.delete(url, option);
};
