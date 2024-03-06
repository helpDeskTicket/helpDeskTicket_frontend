/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import FormList from "./FormList";
import { TicketContext } from "../../api/ticketContext";

const Admin = () => {
  const { tickets, loading, setFilter, filter } = useContext(TicketContext);
  return (
    <div className="w-full h-full flex flex-col items-center mt-10 gap-5">
      <span className="text-3xl text-white pb-5">Ticket List</span>
      <select
        className={`select  ml-[80%] ${filter === "all" ? "bg-white" : ""} ${
          filter === "new" ? "bg-cyan-600" : ""
        } ${filter === "pending" ? "bg-yellow-600" : ""} ${
          filter === "resolved" ? "bg-green-600" : ""
        }`}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="all" className="bg-white">
          All
        </option>
        <option value="new" className="bg-cyan-600">
          New
        </option>
        <option value="pending" className="bg-yellow-600">
          Pending
        </option>
        <option value="resolved" className="bg-green-600">
          resolved
        </option>
      </select>
      <div className="w-full h-auto grid gap-5 px-10 overflow-y-scroll mb-10 hidden-scrollbar">
        {loading ? (
          <></>
        ) : (
          <>
            {tickets.length < 1 ? (
              <>
                <h1 className="text-white text-3xl text-center">
                  No Ticket found
                </h1>
              </>
            ) : (
              <>
                {tickets.map((ticket) => (
                  <FormList key={ticket._id} ticket={ticket}></FormList>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
