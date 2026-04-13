// import React from "react";

// function Contact() {
//   return (
//     <div>
//       <h1>Contact </h1>
//     </div>
//   );
// }

// export default Contact;

import React from "react";

function Contact() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Contact Us</h2>

      <p>Email: support@mywebsite.com</p>
      <p>Phone: +91 9876543210</p>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#182848",
        color: "white",
        border: "none",
        borderRadius: "5px"
      }}>
        Send Message
      </button>
    </div>
  );
}

export default Contact;