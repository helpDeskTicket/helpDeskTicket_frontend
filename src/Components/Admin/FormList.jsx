/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TicketContext } from "../../api/ticketContext";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const FormList = ({ ticket }) => {
  const { ticketCount, setTicketCount } = useContext(TicketContext);

  const {
    title,
    createdBy,
    createdAt,
    status,
    description,
    resolved,
    resolvedAt,
    _id,
  } = ticket;

  const navigate = useNavigate();

  const AcceptTicket = () => {
    fetch(`https://helpdeskticket-backend.onrender.com/api/v1/ticket//accept/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "applicatin/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("ticket accept successfully");
          console.log("Would normally send email here with body: …")
          setTicketCount(ticketCount + 1);
        }
      });
  };

  return (
    <div
      // onClick={() => setActive(!active)}
      className="w-full border rounded bg-transparent text-white px-5 py-2 glass border-rgb"
    >
      <div className="w-full h-full flex items-center justify-between bg-transparent">
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">CreatedAt</span>
          <span>{createdAt}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">CreatedBy</span>
          <span>{createdBy}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Title</span>
          <span>{title}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Status</span>
          <span
            className={`${status === "all" ? "text-white" : ""} ${
              status === "new" ? "text-cyan-600" : ""
            } ${status === "pending" ? "text-yellow-600" : ""} ${
              status === "resolved" ? "text-green-600" : ""
            }`}
          >
            {status}
          </span>
        </div>
        <button
          onClick={() => {
            AcceptTicket();
          }}
          className={`bg-transparent border-rgb px-5 py-2 ${
            status === "new" ? "" : "hidden"
          }`}
        >
          Accept
        </button>
        <Link
          to={`/admin/${_id}`}
          className={`bg-transparent border-rgb px-5 py-2 ${
            status === "pending" ? "" : "hidden"
          }`}
        >
          Solve Ticket
        </Link>
        <Link to={`/list/${_id}`}
          className={`bg-transparent border-rgb px-5 py-2 ${
            status === "resolved" ? "" : "hidden"
          }`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FormList;
