// import React from "react";
// import { Link } from "react-router-dom";

// function Navabar() {
//   return (
//     <div>
//       <ul style={{ display: "flex", gap: 20 }}>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/courses">Courses</Link>
//       </ul>
//     </div>
//   );
// }

// export default Navabar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    background: "linear-gradient(90deg, #4b6cb7, #182848)",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "bold",
  };

  const ulStyle = {
    display: "flex",
    gap: "25px",
    listStyle: "none",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "0.3s",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MyWebsite</div>

      <ul style={ulStyle}>
        <li><Link style={linkStyle} to="/">Home</Link></li>
        <li><Link style={linkStyle} to="/about">About</Link></li>
        <li><Link style={linkStyle} to="/services">Services</Link></li>
        <li><Link style={linkStyle} to="/courses">Courses</Link></li>
        <li><Link style={linkStyle} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;