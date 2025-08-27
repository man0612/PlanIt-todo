import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      {/* PlanIt image directly from public folder */}
      <img src="/PlanIt.png" alt="PlanIt Logo" style={logoStyle} />

      {/* Navigation links */}
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#d6d3cd",
  padding: "5px 5px 5px 5px",
};

const logoStyle = {
  height: "80px",
};

const linkStyle = {
  color: "Black",
  fontWeight: "bold",
  textDecoration: "none",
  marginLeft: "20px",
  fontSize: "20px",
};
