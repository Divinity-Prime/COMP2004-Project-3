import axios from "axios";
import UserForm from "./UserForm";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  // States
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios
        .post("http://localhost:3000/login", formData)
        //   username: formData.username,
        //   password: formData.password,
        .then((response) => setPostResponse(response.data));
      // navigate("./main");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setFormData({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Groceries App</h1>
      <UserForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formData={formData}
        postResponse={postResponse}
        btnText="Login"
      />
      <p>
        Not a member yet? Click <a href="/create-user">here</a> to join
      </p>
    </div>
  );
}
