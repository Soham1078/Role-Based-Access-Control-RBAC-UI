import React, { useEffect, useState } from "react";
import axios from "../services/api";

const Roles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("/roles").then((response) => setRoles(response.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Roles</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.name}</strong>: {role.permissions.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
