import { useContext } from "react";
import { AuthContext } from "../context/authContext";

// Custom hook to use the authentication context
export const useSupaAuth = () => {
  return useContext(AuthContext);
};
