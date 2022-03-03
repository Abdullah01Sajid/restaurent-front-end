import "./Cart.css";
import { useGlobalContext } from "../../context";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
function Cart() {
  const { customer, setShowCart } = useGlobalContext();
  const [showBackDrop, setShowBackDrop] = useState(true);
  return (
    <>
      {showBackDrop && (
        <div
          className="backdrop"
          onClick={() => {
            setShowBackDrop(false);
            setShowCart(false);
          }}
        ></div>
      )}
      <motion.div
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        className="main-cart-container"
      >
        <div className="top-cart">
          <motion.p
            onClick={() => setShowCart(false)}
            whileHover={{ scale: 1.2 }}
            className="exit"
          >
            x
          </motion.p>
          <h3>CART</h3>
        </div>

        {customer.totalprice !== 0 ? (
          <FullCart customer={customer} />
        ) : (
          <EmptyCart />
        )}
      </motion.div>
    </>
  );
}
const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h4>Cart is Empty</h4>
    </div>
  );
};
const FullCart = ({ customer }) => {
  const { setCustomer } = useGlobalContext();

  const handleDeleteCart = async () => {
    const DeletedCart = await axios.delete(`/user/cart/${customer._id}`);
    const data = await DeletedCart.data;
    setCustomer(data);
  };

  return (
    <div className="full-cart">
      <h2 style={{ marginTop: "10px" }}>Name: {customer.name}</h2>
      <h2
        style={{
          fontSize: "1.3rem",
          fontWeight: "400",
          marginBottom: "5px",
        }}
      >
        Location. {customer.direction}
      </h2>
      <h3
        style={{
          marginBottom: "5px",
          marginLeft: "37%",
          fontSize: "1.4rem",
          fontWeight: "500",
          opacity: "0.7",
        }}
      >
        {" "}
        Your Order
      </h3>
      <div className="main-products">
        {customer.cart.map((product, index) => {
          return <SingleCartProducts {...product} key={index} />;
        })}
      </div>

      <h4 style={{ marginTop: "30px", marginBottom: "2px" }}>
        Total Price : €{customer.totalprice}
      </h4>
      <h4>Total Items : {customer.totalitems}</h4>

      <div className="bottom-cart">
        <button className="danger" onClick={() => handleDeleteCart()}>
          Empty Cart{" "}
        </button>
        <button className="success">Confirm Order</button>
      </div>
    </div>
  );
};

function SingleCartProducts({ name, quantity }) {
  return (
    <>
      <p style={{ marginBottom: "3px" }}>
        {name.toUpperCase()} x {quantity}
      </p>
    </>
  );
}
export default Cart;
