import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../../context/User";
import NavBar from "../../components/navigation/NavBar";

import "./DashBoard.css";

function DashBoard() {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <div className="bg">
        <div className="container">
          <Outlet />
          <NavBar />
        </div>
      </div>
    );
  }

  return <Navigate to="/" replace />;
}

export default DashBoard;
