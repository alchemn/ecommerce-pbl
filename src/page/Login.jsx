import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { loginUser } from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("registered") === "true") {
      alert("Pendaftaran berhasil! Silakan login.");
    }
  }, [location.search]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const userData = { email, password };
    const res = await loginUser(userData);
    localStorage.setItem("token", res.data.token);
    navigate("/add-product");
  } catch (error) {
    alert(`Login gagal: ${error.message || "Terjadi kesalahan pada server."}`);
    console.error("Error saat login:", error);
  } finally {
    setIsLoading(false);
  }
};


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Alamat Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contoh@email.com"
          />
          <InputField
            label="Kata Sandi"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi"
          >
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </InputField>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Memuat..." : "Login"}
          </Button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Belum punya akun?{" "}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
