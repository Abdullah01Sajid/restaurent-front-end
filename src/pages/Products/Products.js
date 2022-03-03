import React, { useEffect, useState } from "react";
import "./Products.css";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import axios from "axios";
import PizzaSection from "../../Components/PizzaSection/PizzaSection";
import Cart from "../../Components/Cart/Cart";
// importing users
const Url = `http://localhost:5000/user`;
// importing products
// pizzas
const pizzaUrl = `http://localhost:5000/pizzas`;
// pastas
const pastaUrl = `http://localhost:5000/pastas`;
// bebidas
//const main_context = React.createContext();
const postresUrl = `http://localhost:5000/postres`;
const bebidaUrl = `http://localhost:5000/bebidas`;

function Products() {
  const {
    showCart,
    setShowCart,
    customer,
    search,
    setSearch,
    handleSearch,
    logOut,
    products,
    showSearch,
  } = useGlobalContext();
  const [size, setSize] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const [pastas, setPastas] = useState([]);
  const [postres, setPostres] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (urls) => {
    const getData = await axios.get(urls);
    const arrays = await getData.data;

    switch (urls) {
      case pizzaUrl:
        setPizzas(arrays);
        break;

      case pastaUrl:
        setPastas(arrays);
        break;
      case postresUrl:
        setPostres(arrays);
        break;
      case bebidaUrl:
        setBebidas(arrays);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchData(Url);
    fetchData(pizzaUrl);
    fetchData(pastaUrl);
    fetchData(postresUrl);
    fetchData(bebidaUrl);
  }, []);
  return (
    <>
      {showCart && <Cart />}
      <div className="main-product-page">
        {size ? (
          <motion.div
            transition={{ duration: 0.3 }}
            initial={{ width: "0px" }}
            animate={{ width: "80%" }}
            onClick={() => setSize(!size)}
            className="full"
          >
            <div className="main-info">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
              </svg>
              <div className="left-side">
                <h5>Name : {customer.name}</h5>
                <h5>Direction : {customer.direction}</h5>
              </div>
              <button
                onClick={() => {
                  logOut();
                }}
              >
                Log Out
              </button>
            </div>
          </motion.div>
        ) : (
          <Logo setSize={setSize} />
        )}
        <div className="searchBar">
          <form>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
            />
            <button
              onClick={(e) => {
                handleSearch(e);
              }}
              type="submit"
            >
              <svg
                style={{ height: "20px", width: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {" "}
                <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
              </svg>
            </button>
          </form>
        </div>
        {showSearch && (
          <div className="pizza-section">
            <PizzaSection products={products} name={"Products"} />
          </div>
        )}
        <div className="pizza-section">
          <PizzaSection products={pizzas} name={"PIZZA"} />
        </div>
        <div className="pizza-section">
          <PizzaSection products={pastas} name={"PASTA"} />
        </div>
        <div className="pizza-section">
          <PizzaSection products={postres} name={"SWEET"} />
        </div>
        <div className="pizza-section">
          <PizzaSection products={bebidas} name={"DRINKS"} />
        </div>
      </div>
    </>
  );
}

const Logo = ({ setSize }) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ width: "80%" }}
      animate={{ width: "69px", borderRadius: " 50%" }}
      className="main-cover"
      onClick={() => setSize(true)}
    >
      <div className="main-info">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default Products;
