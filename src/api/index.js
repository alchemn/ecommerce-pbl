

import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL,
});


apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



export const getUser = () => {
  return apiClient.get("/user");
}


export const createProfile = (payload) => {
  return apiClient.post("/user/profile", payload);
}

export const updateProfile = (id, payload) => {
  return apiClient.put(`/user/profile/${id}`, payload);
}
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
  return apiClient.get(`/order/${id}`);
};

export const getCategories = () => {
  return apiClient.get("/category");
};

export const getLatestProducts = () => {
  return apiClient.get("/product/last");
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

export const getMiniProduct = () => {
  return apiClient.get('/product/calculate')
}

export const getAllProfiles = () => {
  return apiClient.get("/user/profile");
};

export const getProductByCategory = (id) => {
  return apiClient.get(`/category/${id}`)
}
