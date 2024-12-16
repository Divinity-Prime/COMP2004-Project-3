import axios from "axios";
import Userform from "./UserForm";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreationUserPage() {
  // States
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const navigate = useNavigate();

  // Handlers
  // Handle user creation
  const handleCreateUser = async () => {
    try {
      axios
        .post("http://localhost:3000/create-user", formData)
        .then((response) => setPostResponse(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  // Update form data on input change
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleCreateUser();
    setFormData({
      username: "",
      password: "",
    });
  };

  //Renderer
  return (
    <div className="LoginForm">
      <h1>Creating User</h1>
      <Userform
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formData={formData}
        postResponse={postResponse}
        btnText="Create User"
      />
      {/* Link to navigate back to the login page */}
      <Link to="/">Back to login page</Link>
    </div>
  );
}
