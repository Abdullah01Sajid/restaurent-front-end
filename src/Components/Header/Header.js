import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import image_src from "../../images/pizza-img.jpg";
import { useGlobalContext } from "../../context";
function Header() {
  const { name, setName, location, setLocation, handleSubmit } =
    useGlobalContext();
  return (
    <div className="main-header-section">
      <div className="top-header">
        <motion.h1
          transition={{ duration: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Made in Italy
        </motion.h1>
        <img src={image_src} style={{ display: "none" }} alt="" />
      </div>
      <div className="down-header">
        <h1 style={{ display: "none" }}>Made in Italy</h1>

        <motion.form
          onSubmit={(e) => handleSubmit(e)}
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.input
            whileTap={{ scale: 1.1 }}
            className="first-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <motion.input
            whileTap={{ scale: 1.1 }}
            type="text"
            className="second-input"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <p>Start with out location</p>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            Start
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
            </svg>
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default Header;
