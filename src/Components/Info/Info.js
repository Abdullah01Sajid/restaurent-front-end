import "./Info.css";
import fast_src from "./../../images/fast-img.png";
import product_src from "../../images/product.png";
import return_src from "../../images/return.png";
import { motion } from "framer-motion";
function Info() {
  const hoverAnimation = {
    animate: {
      scale: 1.2,
    },
  };
  return (
    <div className="icons">
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        className="top-icon"
      >
        <img src={product_src} alt="" />
        <h3>Quality Products</h3>
      </motion.div>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        className="middle-icon"
      >
        <img src={return_src} alt="" />
        <h3>Save Money</h3>
      </motion.div>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        className="bottom-icon"
      >
        <img src={fast_src} alt="" />
        <h3>Fast Delivery</h3>
      </motion.div>
    </div>
  );
}

export default Info;
