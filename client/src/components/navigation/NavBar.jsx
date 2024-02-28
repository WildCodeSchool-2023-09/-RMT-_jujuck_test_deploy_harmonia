import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { RiStarSmileFill } from "react-icons/ri";

function NavBar() {
  return (
    <nav className="position-fixed fixed-bottom bg-dark">
      <ul className="row">
        <li className="col-4 text-center">
          <Link to="/dashboard">
            <FaHome color="white" size={56} />
          </Link>
        </li>
        <li className="col-4 text-center">
          <Link to="/dashboard/decouverte">
            <IoMdQrScanner color="white" size={56} />
          </Link>
        </li>
        <li className="col-4 text-center">
          <Link to="/dashboard/gallerie">
            <RiStarSmileFill color="white" size={56} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
