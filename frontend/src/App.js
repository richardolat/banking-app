import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful!');
        navigate('/dashboard', { state: { userId: data.userId } });
      } else {
        setMessage('Login failed: ' + data.message);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>GoldenCat Bank</h1>
      </header>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <p>{message}</p>
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
      <footer>
        <p>© 2024 CODE WITH GOLDENCAT. ALL RIGHTS RESERVED. | <a href="#">PRIVACY POLICY</a> | <a href="#">TERMS OF SERVICE</a></p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;