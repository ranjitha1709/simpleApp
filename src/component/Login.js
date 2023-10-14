// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
     const [errors, setErrors] = useState({ username: "", password: "" });
const navigate = useNavigate();
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the error message for the current input field
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (formData.username.trim() === "") {
      newErrors.username = "Username or Email is required.";
      valid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleLogin = (e) => {
     e.preventDefault();

    if (validateForm()) {
      // Validation passed, navigate to the home page
      navigate("/home");
    }
  };;

    return (
     <div className="Login">
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username or Email"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Login</button>
      </form>
            </div>
            </div>
  );
}


export default Login;
