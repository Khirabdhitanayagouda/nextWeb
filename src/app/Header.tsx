import React from "react";
import Image from "next/image";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <Image src="/images/Logo.png" width={100} height={100} alt="PD Logo" />
      </div>

      <div className="menu">
        <ul>
          <li>
            <a href="#">DASHBOARD</a>
          </li>
        </ul>
      </div>

      <a href="#">
        {" "}
        <button className="btn"></button>
      </a>
    </div>
  );
};

export default Header;
