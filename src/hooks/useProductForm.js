import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct as apiDeleteProduct,
  getCategories,
} from "../api";
import { getUser } from "../utils/auth";

export const useProductForm = (id = null) => {
  const [initialData, setInitialData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    image: "",
  });
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const isEditMode = id !== null;

  useEffect(() => {
    const fetchInitialData = async () => {
      // Fetch categories for both modes
      try {
        const catResponse = await getCategories();
        setCategories(catResponse.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setNotification({
          message: "Could not fetch categories.",
          type: "error",
        });
      }

      // Fetch product data if in edit mode
      if (isEditMode) {
        setIsLoading(true);
        try {
          const productResponse = await getProductById(id);
          const product = productResponse.data;
          setInitialData({
            name: product.name || "",
            description: product.description || "",
            price: product.price || "",
            categoryId: product.categoryId || "",
            image: product.image || "",
          });
          if (product.image) {
            setImagePreview(`${import.meta.env.VITE_API_URL}${product.image}`);
          }
        } catch (error) {
          setNotification({
            message: `Error fetching product: ${error.message}`,
            type: "error",
          });
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchInitialData();
  }, [id, isEditMode]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("");
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification({ message: "", type: "" });

    const formData = new FormData(e.target);
    const user = getUser();

    if (!user) {
      setNotification({ message: "Please login first.", type: "error" });
      setIsLoading(false);
      return;
    }
    formData.append("userId", user.id);

    try {
      if (isEditMode) {
        await updateProduct(id, formData);
        setNotification({
          message: "Product updated successfully!",
          type: "success",
        });
        setTimeout(() => navigate("/product-list"), 1500);
      } else {
        await createProduct(formData);
        setNotification({
          message: "Product created successfully!",
          type: "success",
        });
        // Reset form after creation
        e.target.reset();
        setFileName("");
        setImagePreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      setNotification({
        message: `Error: ${error.message}`,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setIsLoading(true);
      try {
        await apiDeleteProduct(id);
        setNotification({
          message: "Product deleted successfully!",
          type: "success",
        });
        setTimeout(() => navigate("/product-list"), 1500);
      } catch (error) {
        setNotification({
          message: `Error deleting product: ${error.message}`,
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    initialData,
    notification,
    isLoading,
    categories,
    imagePreview,
    fileName,
    fileInputRef,
    isEditMode,
    handleFileChange,
    handleSubmit,
    handleDelete,
  };
};
