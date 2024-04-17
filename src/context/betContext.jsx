/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useSupaAuth } from "../hooks/useSupaAuth";

export const BetContext = createContext();

export const BetProvider = ({ children }) => {
  const { user } = useSupaAuth();
  const [bets, setBets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // get all bets
  useEffect(() => {
    const getBets = async () => {
      if (!user?.id) return;
      setIsLoading(false);
      const { data, error } = await supabase
        .from("bets")
        .select("*")
        .eq("user_id", user?.id)
        .order("updated_at", { ascending: false });
      setIsLoading(false);

      if (!error) {
        const bets = data || [];
        setBets(bets);
      }
    };
    getBets();
  }, [user]);

  // subscribe to bets insert & delete
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel("bets created")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "bets",
          // filter: `userId=eq.${user?.id}`,
        },
        (payload) => {
          if (payload.new?.userId === user?.id) {
            setBets([payload.new, ...bets]);
          }
        }
      )
      .subscribe();

    const channel_ = supabase
      .channel("bets deleted")
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: "bets",
          // filter: `userId=eq.${user.id}`,
        },
        (payload) => {
          console.log("deleted bet");
          console.log(payload.new?.id);

          setBets(prev => [prev.id !== payload.new?.id]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      supabase.removeChannel(channel_);
    };
  }, [bets, user]);

  // Value object to provide to the context
  const value = {
    bets,
    setBets,
    isLoading,
  };

  return <BetContext.Provider value={value}>{children}</BetContext.Provider>;
};
