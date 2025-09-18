
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL,
});

export const getProductById = (id) => {
  return apiClient.get(`/product/${id}`);
};

export const createOrder = (payload) => {
  return apiClient.post("/order/", payload);
};

export const getOrderById = (id) => {
  return fetch(`${baseURL}/order/${id}`);
};

export const getCategories = () => {
  return apiClient.get("/category");
};

export const getLatestProducts = () => {
  return apiClient.get("/product");
};

export const getAllProducts = () => {
  return apiClient.get("/product");
};
