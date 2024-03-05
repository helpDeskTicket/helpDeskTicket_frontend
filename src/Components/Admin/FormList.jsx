import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const FormList = () => {
  const navigate = useNavigate();
  const redirectSolving = (e) => {
    e.preventDefault();
    navigate(`/admin/1233`);
  };
  return (
    <div
      // onClick={() => setActive(!active)}
      className="w-full border rounded bg-transparent text-white px-5 py-2 glass border-rgb"
    >
      <div
        className="w-full h-full flex items-center justify-between bg-transparent"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">CreatedAt</span>
          <span>12/2/2024</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">CreatedBy</span>
          <span>testing@gmail.com</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Title</span>
          <span>my pc is not working</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Status</span>
          <span>In Progress</span>
        </div>
        <button
          onClick={redirectSolving}
          className="bg-transparent border-rgb px-5 py-2"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default FormList;
