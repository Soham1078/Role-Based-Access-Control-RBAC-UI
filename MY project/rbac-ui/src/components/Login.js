import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

const LoginPage = () => {
  const [name, setName] = useState("soham"); // Set default name to "soham"
  const [email, setEmail] = useState("soham@example.com"); // Set default email to "soham@example.com"
  const [password, setPassword] = useState("soham123"); // Set default password to "soham123"
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("/login", { name, email, password });

      // Assuming your backend returns success or failure
      if (response.data.success) {
        // Navigate to the dashboard on success
        navigate("/dashboard");
      } else {
        alert("Login failed: " + response.data.message); // Show error message from backend
      }
    } catch (error) {
      console.error("Error during login", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sign In
      </Typography>
      
      {/* Name Input Field */}
      <TextField
        fullWidth
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Keep the value editable
        sx={{ marginBottom: 2 }}
      />
      
      {/* Email Input Field */}
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Keep the value editable
        sx={{ marginBottom: 2 }}
      />
      
      {/* Password Input Field */}
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Keep the value editable
        sx={{ marginBottom: 2 }}
      />

      {/* Login Button */}
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
