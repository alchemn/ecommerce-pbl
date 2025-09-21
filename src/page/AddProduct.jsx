import { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, PhotoIcon } from "@heroicons/react/24/solid";
import HeaderAddProduct from "../components/HeaderAddProduct";
import Footer from "../components/Footer";
import SideBarAddProduct from "../components/admin/SideBar";
import { createProduct, getCategories } from "../api"; // Impor getCategories
import Button from "../components/Button";
import { getUser } from "../utils/auth";

const AddProduct = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [categories, setCategories] = useState([]); // State untuk kategori
  const [fileName, setFileName] = useState(""); // State untuk nama file
  const [imagePreview, setImagePreview] = useState(null); // State untuk pratinjau gambar
  const fileInputRef = useRef(null);

  // Fetch kategori saat komponen dimuat
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories(); // Mengambil seluruh respons
        setCategories(response.data); // Mengatur state dengan array dari response.data
      } catch (error) {
        console.error("Error fetching categories:", error);
        setNotification({ message: "Could not fetch categories.", type: "error" });
      }
    };
    fetchCategories();
  }, []);

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

  const submitData = async (e) => {
    e.preventDefault();
    const form=e.target;
    const formData = new FormData(e.target);
    const user = getUser();

    if (!user) {
      setNotification({ message: "Please login to create a product.", type: "error" });
      return;
    }

    formData.append("userId", user.id);

    if (!formData.get("categoryId")) {
      setNotification({ message: "Please select a category.", type: "error" });
      return;
    }

    try {
      await createProduct(formData);
      setNotification({ message: "Product created successfully!", type: "success" });
      form.reset()
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setTimeout(() => {
        navigate("/add-product");
      }, 2000);
    } catch (error) {
      setNotification({ message: `Error creating product: ${error.message}`, type: "error" });
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={submitData}>
      <div
        className="relative flex min-h-screen w-full flex-col bg-gray-50"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <HeaderAddProduct />
        <div className="flex flex-1">
          <SideBarAddProduct />
          <main className="flex-1 px-8 py-8">
            <div className="mx-auto max-w-4xl">
              {notification.message && (
                <div
                  className={`${notification.type === "success" ? "bg-green-100 border-green-400 text-green-700" : "bg-red-100 border-red-400 text-red-700"} border px-4 py-3 rounded relative mb-4`}
                  role="alert"
                >
                  <span className="block sm:inline">{notification.message}</span>
                </div>
              )}
              <div className="flex items-center justify-between ">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  Add New Product
                </h1>
                <Button type="submit">Add Product</Button>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Kolom kiri */}
                <div className="md:col-span-2">
                  {/* Product Info */}
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
                            className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="e.g., Apple iPhone 15"
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
                            className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="A brief description of the product..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Upload Image */}
                  <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900">Media</h2>
                    <div className="mt-6">
                      <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          {imagePreview ? (
                            <img src={imagePreview} alt="Image Preview" className="mx-auto h-32 w-32 object-cover rounded-md" />
                          ) : (
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" />
                          )}
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
                                onChange={handleFileChange}
                                ref={fileInputRef}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                           {fileName ? (
                            <p className="text-sm leading-5 text-gray-800 mt-2">
                              Selected file: <strong>{fileName}</strong>
                            </p>
                          ) : (
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kolom kanan */}
                <div>
                  {/* Category */}
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900">Category</h2>
                    <div className="mt-6">
                      <label htmlFor="category" className="sr-only">Category</label>
                      <select
                        id="category"
                        name="categoryId"
                        className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900">
                      Pricing
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
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="text"
                            id="price"
                            name="price"
                            className="block w-full rounded-lg border-0 py-2.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
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

export default AddProduct;
