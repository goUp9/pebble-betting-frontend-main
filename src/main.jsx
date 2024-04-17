// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import WalletContextProvider from "../src/pages/wallet/WalletContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { BetProvider } from "./context/betContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <WalletContextProvider>
      <BrowserRouter>
        <AuthProvider>
          <BetProvider>
           <div className="font-inter">
           <App />
           </div>
          </BetProvider>
        </AuthProvider>
      </BrowserRouter>
    </WalletContextProvider>
  </>
);
