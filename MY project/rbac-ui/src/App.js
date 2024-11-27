import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./components/Users";
import Roles from "./components/Roles";
import Login from "./components/Login";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock login and logout handlers
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className="App">
        {/* Navbar with login/logout props */}
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        
        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Dashboard /> : <Login handleLogin={handleLogin} />}
            />
            <Route
              path="/users"
              element={isLoggedIn ? <Users /> : <Login handleLogin={handleLogin} />}
            />
            <Route
              path="/roles"
              element={isLoggedIn ? <Roles /> : <Login handleLogin={handleLogin} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
