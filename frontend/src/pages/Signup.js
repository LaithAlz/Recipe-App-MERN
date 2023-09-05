import React, { useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import useSignup from "../helpers/useSignup";

const Signup = () => {
  const [name, setName] = useState("Laith");
  const [email, setEmail] = useState("laith@gmail.com");
  const [password, setPassword] = useState("ABCabc123!");
  const [confirmPassword, setConfirmPassword] = useState("ABCabc123!");

  const [passError, setPassError] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      await signup(email, name, password);
    } else {
      setPassError("Passwords don't match.");
    }
  };

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
        {passError && <div className="pass-error">{passError}</div>}

        <button disabled={isLoading} type="submit">
          Sign up
        </button>
        {error && <div className="error">{error}</div>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
