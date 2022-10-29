import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import trainImg from "./register_img.png";
import "./files.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    Password: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputname = event.target.name;
    setUser((prevValue) => {
      if (inputname === "email") {
        return {
          email: newValue,
          Password: prevValue.Password,
        };
      } else {
        return {
          email: prevValue.email,
          Password: newValue,
        };
      }
    });
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      let res = await response.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login_page">
      <div className="login_main">
        <div className="train_image">
          <img src={trainImg} />
        </div>
        <div className="login_input">
          <div>
            <h3>Login</h3>
            <br />
            <TextField
              sx={{ width: 319 }}
              required
              id="outlined-required"
              name="email"
              label="Email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              sx={{ width: 319 }}
              id="outlined-password-input"
              required
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={user.Password}
              onChange={handleChange}
            />
            <br /> <br />
            <Button onClick={onSubmitForm} variant="contained">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
