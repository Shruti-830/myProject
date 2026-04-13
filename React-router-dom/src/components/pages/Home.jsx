// import React from "react";

// function Home() {
//   return (
//     <div>
//       <h1>Home </h1>
//     </div>
//   );
// }

// export default Home;

import React from "react";

function Home() {
  return (
    <div style={{
      padding: "60px",
      textAlign: "center",
      background: "#f4f7fb",
      minHeight: "80vh"
    }}>
      <h1 style={{ fontSize: "40px", color: "#333" }}>
        Welcome to MyWebsite 🚀
      </h1>

      <p style={{ fontSize: "18px", marginTop: "20px", color: "#555" }}>
        We provide high-quality web development and modern learning solutions.
      </p>

      <button style={{
        marginTop: "30px",
        padding: "12px 25px",
        fontSize: "16px",
        background: "#4b6cb7",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Get Started
      </button>
    </div>
  );
}

export default Home;