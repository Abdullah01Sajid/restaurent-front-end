import "./App.css";
import { useState } from "react";
import Products from "./pages/Products/Products";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Info from "./Components/Info/Info";
import Header from "./Components/Header/Header";
import Categories from "./Components/Categories/Categories";
import ContactInfo from "./Components/ContactInfo/ContactInfo";
import { useEffect } from "react";
import { useGlobalContext } from "./context";
import axios from "axios";

function App() {
  const { getLocation, setCustomer, setShowPage, showPage } =
    useGlobalContext();
  const getcostumer = async () => {
    const id_exist = localStorage.getItem("cstm_id");
    if (!id_exist) {
      return;
    } else {
      const user = await axios.get(`http://localhost:5000/user/${id_exist}`);
      const userData = await user.data;
      setCustomer(userData);
      setShowPage(true);
      console.log(userData);
    }
  };
  useEffect(() => {
    getLocation();
    getcostumer();
  }, []);
  return (
    <>
      <div className="App">
        <Nav />
        {showPage ? (
          <Products />
        ) : (
          <div className="test">
            <div className="top-section">
              <Header />
            </div>
            <div className="second-section">
              <Info />
            </div>
            <div className="Third-section">
              <Categories />
            </div>
            <div className="last-section">
              <ContactInfo />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
