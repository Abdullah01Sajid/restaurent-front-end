import React from "react";
import "./PizzaSection.css";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";
import axios from "axios";
function PizzaSection({ products, name }) {
  const { customer, setLoading, setCustomer } = useGlobalContext();
  const handleAddToCart = async (name, id, price, ingredients) => {
    const addToCart = await axios.put(`/user/cart/${customer._id}`, {
      name: name,
      id: id,
      ingredients: ingredients,
      price: price,
    });
    const data = await addToCart.data;
    setCustomer(data);
    console.log(data);
  };
  if (!products) {
    return <div className="loading">loading ...</div>;
  }
  return (
    <div className="main-pizza-section">
      <motion.div
        transition={{ delay: 0.2 }}
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        className="top-section"
      >
        <h1>{name}</h1>
      </motion.div>

      {products.map((data) => {
        return (
          <SingleProducts
            handleAddToCart={handleAddToCart}
            {...data}
            key={data.id}
          />
        );
      })}
    </div>
  );
}

const SingleProducts = ({
  name,
  size,
  ingredients,
  category,
  price,
  id,
  handleAddToCart,
}) => {
  return (
    <div className="main-products">
      <h3>
        {category.toUpperCase()} {name.toUpperCase()}
      </h3>
      <p>{ingredients}</p>
      <p>{size}</p>
      <p style={{ fontWeight: "400", fontSize: "15px" }}>Price :€{price}</p>
      <motion.button
        onClick={() => handleAddToCart(name, id, price, ingredients)}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        Buy
      </motion.button>
    </div>
  );
};

export default PizzaSection;
