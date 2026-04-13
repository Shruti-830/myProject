import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./components/MainRoutes";

function App() {
  return (
    <div>
      
      <Header />
      <Navbar />

      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;