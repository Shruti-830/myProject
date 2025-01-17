import React from 'react';
import Tablehead from "../tablehead/tablehead";
import Tablebody from "../tablebody/tablebody";
import "./table.css"

import { useNavigate } from 'react-router-dom';
function Table(){

    const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the form page when the button is clicked
    navigate('/form');
  };
    return(
        <div style={{ padding: "20px" }}>
        <h1>Student Information</h1>
        <button  type="button" class="btn btn-primary" onClick={handleButtonClick}>Add student details</button>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
       
          <Tablehead/>
          <Tablebody/>
         
        </table>
        
      </div>
    )
}

export default Table;