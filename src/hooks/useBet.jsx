import { useContext } from "react";
import { BetContext } from "../context/betContext";

// Custom hook to use the authentication context
export const useBet = () => {
  return useContext(BetContext);
};
