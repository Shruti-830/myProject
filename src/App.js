import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Table from "./Table/table";
import Addform from "./addform/addform"
import Updateform from "./Updateform/Updateform";
import './App.css';


 


function App(){
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/form" element={<Addform />} />
        <Route path="/updateform/:id" element={<Updateform />} />
      </Routes>
    </Router>
    
  );

}
export default App;
