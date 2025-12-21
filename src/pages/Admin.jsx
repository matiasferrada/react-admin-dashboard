import { useEffect, useState } from "react";
import { getAdminSecret } from "../api/api";

export default function Admin() {
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function load() {
      try {
        const data = await getAdminSecret(token);
        setMessage(data.message);
      } catch {
        setMessage("Access denied");
      }
    }

    load();
  }, [token]);

  return (
    <div>
      <h2>Admin Area</h2>
      <p>{message}</p>
    </div>
  );
}
