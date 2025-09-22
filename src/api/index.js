import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("Request config:", config);
  console.log("Token from localStorage:", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor to log responses
apiClient.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.log("Response error:", error);
    console.log("Response error details:", {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers
    });
    return Promise.reject(error);
  }
);

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

export const getAllProducts = (page = 1, search = '') => {
  return apiClient.get("/product", {
    params: {
      page,
      search,
    }
  });
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
  console.log(`Making DELETE request to /product/${id}`);
  return apiClient.delete(`/product/${id}`);
};

export const getMiniProduct = () => {
  return apiClient.get('/product/calculate')
};

export const getTotalProducts = () => {
  return apiClient.get('/product/count');
};

export const getTotalUsers = () => {
  return apiClient.get('/user/count');
};

export const getTotalOrders = () => {
  return apiClient.get('/order/count');
};

export const getAllProfiles = () => {
  return apiClient.get("/user/profile");
};

export const getProfileById = (params) => {
  return apiClient.get("/user/profile", { params });
};

export const getProductByCategory = (name) => {
  return apiClient.get(`/category/name/${name}`)
}