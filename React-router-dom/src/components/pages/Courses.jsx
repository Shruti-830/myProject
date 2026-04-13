// import React from "react";

// function Courses() {
//   return (
//     <div>
//       <h1>Courses </h1>
//     </div>
//   );
// }

// export default Courses;

import React from "react";

function Courses() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Our Courses</h2>

      <ul style={{
        listStyle: "none",
        marginTop: "20px",
        fontSize: "18px"
      }}>
        <li>💻 MERN Stack Development</li>
        <li>⚛️ React Advanced</li>
        <li>🌐 Full Stack Web Development</li>
      </ul>
    </div>
  );
}

export default Courses;