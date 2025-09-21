
import { jwtDecode } from "jwt-decode";

export const getUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      return {
        id: decodedToken.id,
        email: decodedToken.email,
        role: decodedToken.role,
      };
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }
  return null;
};
