import { useState } from "react";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

export default function App() {
  const [logged, setLogged] = useState(!!localStorage.getItem("token"));

  function handleLogin() {
    setLogged(true);
  }

  return (
    <div>
      {logged ? <Admin /> : <Login onLogin={handleLogin} />}
    </div>
  );
}
