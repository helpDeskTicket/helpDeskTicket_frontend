/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserList = ({ ticket }) => {
  const { title, createdAt, createdBy, status, _id } = ticket;

  return (
    <div className="w-full border rounded bg-transparent text-white px-5 py-2 glass border-rgb">
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
        <Link
          to={`/list/${_id}`}
          className="bg-transparent border-rgb px-5 py-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default UserList;
