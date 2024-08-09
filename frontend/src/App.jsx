import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  toast.success("Hello world");

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
