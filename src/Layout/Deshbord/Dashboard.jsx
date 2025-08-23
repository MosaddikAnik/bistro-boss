import React from "react";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard Sidebar */}
      <div className="w-64 min-h-screen bg-amber-700 ">
        <h1 className="text-2xl font-bold text-center py-6">
          BISTRO BOSS <br />{" "}
          <span className="text-2xl font-semibold">R e s t a u r a n t</span>
        </h1>

        <ul className="p-4 space-y-4">
          <li>
            <NavLink
              to="/dashboard/user"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white text-amber-700 font-semibold"
                    : "hover:bg-amber-600"
                }`
              }
            >
              <FaHome /> User
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white text-amber-700 font-semibold"
                    : "hover:bg-amber-600"
                }`
              }
            >
              <FaCalendar /> Reservation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white text-amber-700 font-semibold"
                    : "hover:bg-amber-600"
                }`
              }
            >
              <FaShoppingCart /> Cart
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/review"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white text-amber-700 font-semibold"
                    : "hover:bg-amber-600"
                }`
              }
            >
              <FaAd /> Review
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/bookings"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white text-amber-700 font-semibold"
                    : "hover:bg-amber-600"
                }`
              }
            >
              <FaList /> Bookings
            </NavLink>
          </li>
        </ul>
        <hr />
        <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white text-amber-700 font-semibold"
                    : "hover:bg-amber-600"
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
