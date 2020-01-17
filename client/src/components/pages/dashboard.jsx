import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
    </div>
  );
}
