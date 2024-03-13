/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

export const TicketContext = createContext();

const TicketContextProvider = ({ children }) => {
  const [tickets, setTikets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [ticketCount, setTicketCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/ticket/allticket?filter=${filter}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTikets(data.result);
        setLoading(false);
      });
  }, [filter, ticketCount]);
  const contextValue = {
    tickets,
    filter,
    setFilter,
    ticketCount,
    setTicketCount,
    loading,
  };
  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContextProvider;
