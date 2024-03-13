/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../api/userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { TicketContext } from "../../api/ticketContext";
import AdminForm from "./AdminForm";

export const Form = () => {
  // context api
  const { user } = useContext(AuthContext);
  const { ticketCount, setTicketCount } = useContext(TicketContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // all ref
  const nameRef = useRef();
  const emailRef = useRef();
  const issueRef = useRef();
  const desRef = useRef();

  // all functions
  const handleSubmit = (e) => {
    if (!user?.email) {
      toast.error("please login first");
      return navigate("/login");
    }
    e.preventDefault();

    const dateRow = new Date();
    const date = format(dateRow, "PP");

    console.log(date);

    const ticket = {
      title: issueRef.current.value,
      description: desRef.current.value,
      createdAt: date,
      createdBy: emailRef.current.value,
    };

    fetch(`${import.meta.env.VITE_API_URL}/ticket/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ticket),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.message);
          setTicketCount(ticketCount + 1);
          navigate("/list");
        } else {
          setError(data.error);
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`w-1/2 h-1/2 mx-auto mt-10 flex flex-col items-center gap-2 ${
          user.role === "admin" ? "hidden" : ""
        }`}
      >
        <span className="text-3xl text-white font-semibold pb-5">
          Help Desk
        </span>


        <span className={`text-1xl pb-5 ${user?.email ? "hidden" : ""}`}>
          you MUST <a href="/login">login</a> to submit ticket
        </span>

        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="name" className="text-white text-lg">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            defaultValue={user?.name}
            name=""
            id="name"
            className="w-full bg-transparent border py-3 px-3 text-white"
            required
          />
        </div>
        <div className={`w-full flex flex-col items-start gap-1 `}>
          <label htmlFor="email" className="text-white text-lg">
            Email
          </label>
          <input
            ref={emailRef}
            type="text"
            name=""
            defaultValue={user?.email}
            id="email"
            className="w-full bg-transparent border py-3 px-3 text-white"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="issue" className="text-white text-lg">
            Title
          </label>
          <input
            ref={issueRef}
            type="text"
            name=""
            id="issue"
            className="w-full bg-transparent border py-3 px-3 text-white"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="des" className="text-white text-lg">
            Description
          </label>
          <textarea
            ref={desRef}
            type="text"
            name=""
            id="des"
            className="w-full bg-transparent border py-3 px-3 text-white"
            required
          />
        </div>
        <h1 className="text-red-600">{error}</h1>
        <button
          type="submit"
          className="bg-slate-100 hover:bg-slate-200 px-7 py-2 rounded mt-5 text-black font-medium"
        >
          Submit
        </button>
      </form>
      <div className={`${user?.role === "admin" ? "" : "hidden"}`}>
        <AdminForm></AdminForm>
      </div>
    </div>
  );
};
