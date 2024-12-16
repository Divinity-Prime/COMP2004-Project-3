import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function NavBar({ quantity }) {
  // State to store the username from cookies
  const [username, setUsername] = useState("");

  // Fetch username from cookies
  useEffect(() => {
    const givenName = Cookies.get("given_name");
    if (givenName) {
      setUsername(givenName);
    }
  }, []);

  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        {username ? <h3>Hello, {username}</h3> : <h3>Hello, Guest</h3>}
      </div>
      <div className="NavDiv NavTitle">
        <h2>Groceries App 🍎</h2>
      </div>
      <Link to="/add-product">
        <button>Add Product</button>
      </Link>

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
