// import React from 'react'

// function Footer() {
//   return (
//     <div>

// <h1>This is Footer at last</h1>

//     </div>
//   )
// }

// export default Footer 

import React from "react";

function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#182848",
        color: "white",
        textAlign: "center",
        padding: "15px",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.2)"
      }}
    >
      <p style={{ margin: 0 }}>
        © 2026 MyWebsite | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;