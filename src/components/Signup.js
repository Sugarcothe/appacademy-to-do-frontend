import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    try {
      const data = await axios({
        method: "POST",
        url: "http://localhost:8080/api/users/signup",
        data: {
          email,
          password,
        },
      });
      const result = data.data;
      console.log(result);
      if (result) {
        return navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
