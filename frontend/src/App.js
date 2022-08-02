import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logged from "./Component/Logged";
function App() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/logged" element={<Logged />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;