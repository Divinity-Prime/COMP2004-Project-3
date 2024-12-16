import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ quantity, username }) {
  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <h3>Hello, {username || "Nobody"}</h3>
      </div>
      <div className="NavDiv NavTitle">
        <h2>Groceries App 🍎</h2>
      </div>
      <Link to="/add-product">
        <button>Add Product</button>
      </Link>

      {/* <Link to="/edit-product">
        <button>Edit Product</button>
      </Link> */}

      <div className="NavDiv NavCart">
        <img
          src={
            quantity > 0
              ? "src/assets/cart-full.png"
              : "src/assets/cart-empty.png"
          }
        />
      </div>
    </nav>
  );
}
