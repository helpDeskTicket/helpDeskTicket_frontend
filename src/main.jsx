import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserContext from "./api/userContext.jsx";
import TicketContextProvider from "./api/ticketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster></Toaster>
    <UserContext>
      <TicketContextProvider>
        <App />
      </TicketContextProvider>
    </UserContext>
  </BrowserRouter>
);
