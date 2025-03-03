import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
