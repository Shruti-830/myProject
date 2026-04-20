import React from "react";
import Student from "./components/Student";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Props in reactJS</h1>
      <Student name="Rahul" age="25" address="pune" />
      <Profile name="Shruti" age="24" profession="software developer" />
      <Profile name="Rashi" age="27" profession="CA" />
    </div>
  );
}

export default App;