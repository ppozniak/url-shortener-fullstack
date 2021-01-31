import axios from "axios";

import urlApiFactory from "./url";

const MAIN_API_INSTANCE = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const urlApi = urlApiFactory({
  instance: MAIN_API_INSTANCE,
});
