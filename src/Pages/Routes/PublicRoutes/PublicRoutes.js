import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import About from "../../About/About";
import Appointment from "../../Appointment/Appointment";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Login", element: <Login></Login> },
      { path: "/Register", element: <Register></Register> },
      { path: "/Appointment", element: <Appointment></Appointment> },
      { path: "/About", element: <About></About> },
    ],
  },
]);
export default router;
