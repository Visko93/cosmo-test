import axios, { AxiosRequestConfig } from "axios";
import { GITHUB_BASE_API } from "../global/constants/api";

export const axiosClient = axios.create({
  baseURL: GITHUB_BASE_API,
});

// Como paleativo usando token pessoal
/**
 * @TODO Add SSO para que o usuario possa usar um TOKEN proprio
 * https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
 */
axiosClient.defaults.headers.common["Authorization"] =
  import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  };

  return config;
});
