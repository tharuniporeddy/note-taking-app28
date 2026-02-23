import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      setError("Enter username and password");
      return;
    }

    localStorage.setItem("jwt_token", "dummy_token");
    localStorage.setItem("username", username);
    navigate("/", { replace: true });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitForm}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
