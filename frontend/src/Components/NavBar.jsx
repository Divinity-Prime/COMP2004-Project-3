export default function NavBar({ quantity }) {
  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <h3>Hello, {currentUser}</h3>
      </div>
      <div className="NavDiv NavTitle">
        <h2>Groceries App 🍎</h2>
      </div>
      <button onclick="">Add Product</button>
      <button onclick="">Edit Product</button>

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
