/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../api/userContext";
import toast from "react-hot-toast";
import setTokenToLocalStroge from "../SetTokenToLocal/SetTokenToLocal";

const AdminForm = () => {
  const { user, count, setCount } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const oldPassword = form.oldPassword.value;

    const adminInfo = {
      name,
      email,
      password,
      oldPassword,
    };

    const token = localStorage.getItem("token");

    fetch("https://helpdeskticket-backend.onrender.com/api/v1/user/update", {
      method: "PATCH",
      headers: {
        authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(adminInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success(data?.message);
          setCount(count + 1);
          setTokenToLocalStroge(data.token);
        } else {
          setError(data.error);
        }
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 h-1/2 mx-auto mt-10 flex flex-col items-center gap-2"
    >
      <span className="text-3xl text-white font-semibold pb-5">
        Update Admin Info
      </span>

      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="name" className="text-white text-lg">
          Name
        </label>
        <input
          type="text"
          defaultValue={user?.name}
          name="name"
          className="w-full bg-transparent border py-3 px-3 text-white"
          required
        />
      </div>
      <div className={`w-full flex flex-col items-start gap-1 `}>
        <label htmlFor="email" className="text-white text-lg">
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          className="w-full bg-transparent border py-3 px-3 text-white"
          required
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="password" className="text-white text-lg">
          Old Password
        </label>
        <input
          type="password"
          name="oldPassword"
          className="w-full bg-transparent border py-3 px-3 text-white"
          required
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="password" className="text-white text-lg">
          New Password
        </label>
        <input
          type="password"
          name="password"
          className="w-full bg-transparent border py-3 px-3 text-white"
          required
        />
      </div>
      <h1 className="text-red-600">{error}</h1>
      <button
        type="submit"
        className="bg-slate-100 hover:bg-slate-200 px-7 py-2 rounded mt-5 text-black font-medium"
      >
        Update
      </button>
    </form>
  );
};

export default AdminForm;
