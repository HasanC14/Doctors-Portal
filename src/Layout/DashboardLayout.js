import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import UseAdmin from "../Pages/UseAdmin/UseAdmin";

const DashboardLayout = () => {
  const { User } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(User?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to={"/dashboard"}>My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to={"/dashboard/allusers"}>All Users</Link>
                </li>
                <li>
                  <Link to={"/dashboard/addDoctor"}>Add A Doctor</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
