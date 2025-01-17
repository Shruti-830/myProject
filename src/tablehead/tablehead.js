import React from 'react';

function tablehead (){
    return(
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>Roll No</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>Mobile Number</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>Class</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>Gender</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}></th>
          </tr>
        </thead>
    )
}

export default tablehead;