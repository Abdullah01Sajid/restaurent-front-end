import { motion } from "framer-motion";
import "./Categories.css";
function Categories() {
  const animations = {
    initial: {
      x: -120,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    duration: { duration: 0.5 },
  };
  return (
    <div className="main-category-container">
      <h2>Main Categories</h2>
      <motion.div
        initial={animations.initial}
        transition={animations.duration}
        whileInView={animations.animate}
        whileHover={{ x: 15, y: 9 }}
        className="top-category"
      >
        Pizzas
      </motion.div>
      <motion.div
        initial={{ x: 120 }}
        whileInView={{ x: 0 }}
        whileHover={{ x: 9, y: 9 }}
        transition={animations.duration}
        className="mid-category"
      >
        Pastas
      </motion.div>
      <motion.div
        whileHover={{ x: -9, y: -9 }}
        initial={animations.initial}
        whileInView={animations.animate}
        transition={animations.duration}
        className="last-category"
      >
        Sweets
      </motion.div>
      <motion.button
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        Order Now
      </motion.button>
    </div>
  );
}

export default Categories;
