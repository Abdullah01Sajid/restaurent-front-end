import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="main-sidebar-container">
      <button>
        <a href="#pizza">Pizza</a>{" "}
      </button>
      <button>
        <a href="#pasta">Pasta</a>
      </button>
      <button>
        <a href="#postre">Sweet</a>
      </button>
      <button>
        <a href="#bebida">Drinks</a>
      </button>
    </div>
  );
}

export default Sidebar;
