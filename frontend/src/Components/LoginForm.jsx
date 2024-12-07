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

{
  /* <form onSubmit={handleOnSubmit}>
        <div>
          <p
            style={{
              display: "inline",
              marginRight: "20px",
            }}
          >
            Username
          </p>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <p
            style={{
              display: "inline",
              marginRight: "20px",
            }}
          >
            Password
          </p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <button onClick=
      </form> */
}
