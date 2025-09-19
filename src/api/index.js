

import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL,
});


export const createProduct = (formData) => {
  return apiClient.post("/product", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};

export const getProductById = (id) => {
  return apiClient.get(`/product/${id}`);
};

export const getAllOrders = (params) => {
  return apiClient.get("/order", { params });
};

export const createUser = (payload) => {
  return apiClient.post("/user/", payload);
}

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

export const loginUser = (payload) => {
  return apiClient.post("/user/login", payload);
};

export const updateProduct = (id, formData) => {
  return apiClient.put(`/product/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteProduct = (id) => {
  return apiClient.delete(`/product/${id}`);
};
