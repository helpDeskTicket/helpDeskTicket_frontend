import { NavLink, Route, Routes } from "react-router-dom";
import { Form } from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";
import Solving from "./Components/Admin/Solving";
import HelpDeskList from "./Components/HelpDeskList/HelpDeskList";
import ViewDetails from "./Components/HelpDeskList/ViewDetails";
import SignUp from "./Components/SignUp/SignUp";
import { useContext } from "react";
import { AuthContext } from "./api/userContext";

const App = () => {
  // context api
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="w-screen h-screen bg-gredient overflow-hidden">
      <nav className="w-full h-16 bg-transparent text-white flex items-center justify-between px-10">
        <div className="flex items-center">
          <NavLink to="/" className="text-3xl font-semibold">
            Help Desk
          </NavLink>
          <h1 className={`ml-5 ${user?.email ? " " : "hidden"}`}>
            Welcome {user?.name}
          </h1>
        </div>
        <div className="flex gap-5">
          <NavLink
            to="/admin"
            className={`${user?.role === "admin" ? "" : "hidden"}`}
          >
            Admin Panel
          </NavLink>
          <NavLink to="/list" className={`${user?.role === "user" ? "" : "hidden"}`}>Report</NavLink>
          <NavLink to="/login" className={`${user?.email ? "hidden" : ""}`}>
            Login
          </NavLink>
          <div onClick={logOut}>
            <NavLink className={`${user?.email ? "" : "hidden"}`}>
              Logout
            </NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<HelpDeskList />} />
        <Route path="/list/:id" element={<ViewDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:id" element={<Solving />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
