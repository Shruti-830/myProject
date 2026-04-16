import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
         <ul style={{ display: "flex", gap: 20,marginBottom:100,marginTop:40 }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </>
  );
}

export default Navbar;