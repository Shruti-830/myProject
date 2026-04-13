// import React from "react";

// function Services() {
//   return (
//     <div>
//       <h1>Services </h1>
//     </div>
//   );
// }

// export default Services;

import React from "react";

function Services() {
  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Our Services</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px"
      }}>
        <div style={cardStyle}>
          <h3>Web Development</h3>
          <p>Modern and responsive websites.</p>
        </div>

        <div style={cardStyle}>
          <h3>App Development</h3>
          <p>Mobile apps with great UI/UX.</p>
        </div>

        <div style={cardStyle}>
          <h3>Training</h3>
          <p>Learn MERN stack from experts.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;