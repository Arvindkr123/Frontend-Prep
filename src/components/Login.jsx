import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        name="username"
        id=""
        placeholder="enter ur name"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        id=""
        placeholder="enter ur password"
      />
      <button onClick={handleSubmit} type="submit">
        submit
      </button>
    </div>
  );
};

export default Login;
