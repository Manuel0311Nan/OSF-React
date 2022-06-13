import React from "react";
import { useAuthDispatch, logout, useAuthState } from "../../context";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";

function Dashboard(props) {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/"); //navega de nuevo al login sin usuario
  };
  return (
    <div style={{ padding: 10 }}>
      <div className={styles.dashboardPage}>
        <h1>Dashboard</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <p>Welcome {userDetails.user.email}</p>
    </div>
  );
}

export default Dashboard;