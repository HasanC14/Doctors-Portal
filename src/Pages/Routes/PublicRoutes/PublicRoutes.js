import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Main from "../../../Layout/Main";
import About from "../../About/About";
import AddDoctor from "../../AddDoctor/AddDoctor";
import AllDoctors from "../../AllDoctors/AllDoctors";
import AllUsers from "../../AllUsers/AllUsers";
import Appointment from "../../Appointment/Appointment";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Login", element: <Login></Login> },
      { path: "/Register", element: <Register></Register> },
      {
        path: "/Appointment",
        element: (
          <PrivateRoute>
            <Appointment></Appointment>{" "}
          </PrivateRoute>
        ),
      },
      { path: "/About", element: <About></About> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <MyAppointment></MyAppointment> },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addDoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allDoctors",
        element: (
          <AdminRoute>
            <AllDoctors></AllDoctors>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
