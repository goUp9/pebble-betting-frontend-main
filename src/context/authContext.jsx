/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useWallet } from "@solana/wallet-adapter-react";
import { DEFAULT_AVATAR_URLS } from "../lib/config";

// Create a context for the authentication state
export const AuthContext = createContext();

// AuthProvider component to wrap your application with
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { connected, publicKey, disconnecting } = useWallet();
  const [refresh, setRefresh] = useState(false);

  // check user
  useEffect(() => {
    function generateRandomReferralID(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let referralID = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        referralID += characters.charAt(randomIndex);
      }

      return referralID;
    }

    const getuser = async () => {
      if (refresh) {
        console.log("refreshing...");
      }

      if (connected && publicKey) {
        console.log("Wallet connected:", publicKey.toBase58());
        setIsLoading(true);
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("wallet_address", publicKey.toBase58());

        if (!error && data && data.length > 0) {
          setUser(data[0]);
        } else {
          // create user

          const randomIndex = Math.floor(
            Math.random() * DEFAULT_AVATAR_URLS.length
          );
          const avatar = DEFAULT_AVATAR_URLS[randomIndex];
          const { data, error } = await supabase
            .from("users")
            .insert({
              wallet_address: publicKey.toBase58(),
              avatar,
              referral_id: generateRandomReferralID(8),
            })
            .select()
            .single();

          if (!error) {
            setUser(data);
          } else {
            console.log("failed to create new user");
            setUser(null);
          }
        }
        setIsLoading(false);
      } else {
        // setUser(null);
      }
      setIsLoading(false);
    };

    getuser();
  }, [connected, publicKey, refresh]);

  useEffect(() => {
    if (!disconnecting) {
      // setTimeout(() => {
      //   if (!connected) {
      //   }
      // }, 1000);
      setUser(null);
    }
  }, [connected, disconnecting]);

  // Value object to provide to the context
  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    setRefresh,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
