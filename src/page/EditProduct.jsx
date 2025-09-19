import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";
import HeaderAddProduct from "../components/HeaderAddProduct";
import Footer from "../components/Footer";
import SideBarAddProduct from "../components/SideBarAddProduct";
import { getProductById, updateProduct, deleteProduct } from "../api";
import Button from "../components/Button";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [notification, setNotification] = useState({ message: "", type: "" });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        setNotification({
          message: `Error fetching product: ${error.message}`,
          type: "error",
        });
      }
    };
    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await updateProduct(id, formData);
      setNotification({
        message: "Product updated successfully!",
        type: "success",
      });
      setTimeout(() => {
        navigate("/product-list"); // Redirect to product list after success
      }, 2000);
    } catch (error) {
      setNotification({
        message: `Error updating product: ${error.message}`,
        type: "error",
      });
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        setNotification({
          message: "Product deleted successfully!",
          type: "success",
        });
        setTimeout(() => {
          navigate("/product-list"); // Redirect to product list after success
        }, 2000);
      } catch (error) {
        setNotification({
          message: `Error deleting product: ${error.message}`,
          type: "error",
        });
      }
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={submitData}>
      <div
        className="relative flex min-h-screen w-full flex-col bg-gray-50"
        style={{ fontFamily: '''Inter, "Noto Sans", sans-serif''' }}
      >
        <HeaderAddProduct />
        <div className="flex flex-1">
          <SideBarAddProduct />
          <main className="flex-1 px-8 py-8">
            <div className="mx-auto max-w-4xl">
              {notification.message && (
                <div
                  className={`${
                    notification.type === "success"
                      ? "bg-green-100 border-green-400 text-green-700"
                      : "bg-red-100 border-red-400 text-red-700"
                  } border px-4 py-3 rounded relative mb-4`}
                  role="alert"
                >
                  <span className="block sm:inline">
                    {notification.message}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between ">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  Edit Product
                </h1>
                <div className="flex gap-4">
                  <Button type="submit">Update Product</Button>
                  <Button
                    type="button"
                    onClick={handleDelete}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Delete Product
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900">
                      Product Information
                    </h2>
                    <div className="mt-6 space-y-6">
                      <div>
                        <label
                          htmlFor="product-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Product Name
                        </label>
                        <div className="mt-2 ">
                          <input
                            type="text"
                            id="product-name"
                            name="name"
                            value={product.name}
                            onChange={handleInputChange}
                            className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={product.description}
                            onChange={handleInputChange}
                            className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900">Media</h2>
                    <div className="mt-6">
                      <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="image"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900">
                      Pricing & Inventory
                    </h2>
                    <div className="mt-6 space-y-6">
                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Price
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={handleInputChange}
                            className="block w-full rounded-lg border-0 py-2.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="userId"
                        value="1" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </form>
  );
};

export default EditProduct;
