import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    try {
      const data = await axios({
        method: "POST",
        url: `https://appacademy-to-do.onrender.com/api/users/login`,
        data: {
          email,
          password,
        },
      });
      const result = data.data;
      console.log(result);
      if (result) {
        return navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default SignIn;
