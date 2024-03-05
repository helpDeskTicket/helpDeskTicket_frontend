/* eslint-disable no-unused-vars */
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { TicketContext } from "../../api/ticketContext";

const Solving = () => {
  const { ticketCount, setTicketCount } = useContext(TicketContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [singleTicket, setSingleTicket] = useState({});
  console.log(singleTicket);

  const {
    title,
    createdBy,
    createdAt,
    status,
    description,
    resolved,
    resolvedAt,
    _id,
  } = singleTicket;

  useEffect(() => {
    fetch(`https://tms-server-hzd8.onrender.com/api/v1/ticket/getTicket/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleTicket(data.result));
  }, [id]);

  const handleSolveSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const resolvedAt = format(date, "PP");
    const resolved = event.target.solved.value;

    const resolvedData = {
      resolved,
      resolvedAt,
      ticketId: _id,
    };

    console.log(resolvedData);

    fetch("https://helpdeskticket-backend.onrender.com/api/v1/ticket/slove", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(resolvedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("ticket resolved successfully");
          setTicketCount(ticketCount + 1);
          navigate("/admin");
        }
        console.log(data);
      });
  };
  return (
    <div className="w-full h-full mt-10 flex flex-col items-center text-white gap-5 px-10 overflow-y-scroll hidden-scrollbar pb-28">
      <div className="w-full flex items-start">
        <svg
          onClick={() => navigate("/admin")}
          className="cursor-pointer"
          fill="#ffffff"
          height="40px"
          width="40px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 489.3 489.3"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M476.9,232.45H147.2l55.9-55.9c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-76.8,76.8c-4.8,4.8-4.8,12.5,0,17.3l76.8,76.8
			c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-55.9-55.9H477c6.8,0,12.3-5.5,12.3-12.3
			C489.2,237.85,483.7,232.45,476.9,232.45z"
              />
            </g>
          </g>
        </svg>
      </div>
      <span className="text-3xl font-semibold">Solving</span>
      <form
        onSubmit={handleSolveSubmit}
        className="w-full flex flex-col justify-between p-5 border rounded bg-transparent border-rgb gap-5"
      >
        <div className="w-full flex flex-col items-start justify-between gap-3">
          <div className="w-full flex items-center justify-between">
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
          </div>
          <div className="w-full flex items-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm">Description</span>
              <span className="text-center text-[#d9e8e896] text-lg">
                {description}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-between gap-2">
          <span className="text-lg">Answer</span>
          <textarea
            type="text"
            name="solved"
            id=""
            className="w-full bg-transparent border-rgb px-5 pt-2 h-24"
          />
        </div>
        <div className="w-full flex justify-end">
          <button className="border-rgb bg-transparent px-5 py-2 font-medium">
            Solve
          </button>
        </div>
      </form>
    </div>
  );
};

export default Solving;
