import { useState } from "react";
import axios from "axios";
export default function ProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    image: "",
    price: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    if (isEditing) {
      e.preventDefault();
      handleUpdateProduct(formData._id);
      setIsEditing(false);
      setFormData({
        productName: "",
        brand: "",
        image: "",
        price: "",
      });
    } else {
      e.preventDefault();
      try {
        console.log(formData);
        await axios
          .post("http://localhost:3000/add-product", formData)
          .then((result) => {
            setPostResponse(result.data);
          });
        setFormData({
          productName: "",
          brand: "",
          image: "",
          price: "",
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleUpdateProduct = async (productId) => {
    try {
      await axios
        .patch(`http://localhost:3000/products/${productId}`, formData)
        .then((result) => {
          setPostResponse(result.data);
        });
      setFormData({
        productName: "",
        brand: "",
        image: "",
        price: "",
      });
      setIsEditing(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="product-form">
      <h2>Product Form</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="productName"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleOnChange}
        />
        <br />

        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleOnChange}
        />
        <br />

        <input
          type="text"
          id="image"
          name="image"
          placeholder="Image Link"
          value={formData.image}
          onChange={handleOnChange}
        />
        <br />

        <input
          type="text"
          id="price"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleOnChange}
        />
        <br />
        <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
      </form>
      {postResponse && <p>{postResponse}</p>}
    </div>
  );
}
