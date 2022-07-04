import React from "react";
import "./Header.css";

function Header({ children }) {
  return <div className="header-main">
    <div className="header-top"></div>
    {children}
</div>;
}

export default Header;
