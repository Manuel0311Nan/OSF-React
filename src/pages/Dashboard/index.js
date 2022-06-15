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
    <div >
      <div className={styles.dashboardPage}>
      <h1 className={styles.dashboardPage__name}>Welcome {userDetails.user.email} a tu espacio "One Second Faith"</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis
          viverra faucibus. In convallis nisl porttitor cursus ultrices. Nullam
          quis sodales nunc. Sed blandit massa vitae nulla venenatis, quis
          ornare neque iaculis. Pellentesque id erat lobortis, facilisis libero
          et, efficitur nulla. Donec at mauris nibh. Praesent feugiat dui non
          nisi semper elementum vestibulum id est. Duis sit amet urna sit amet
          ex tristique iaculis sed quis urna. Nulla ac dictum turpis, ac
          bibendum nisi. Curabitur mollis sapien vel nibh varius, non iaculis
          magna lacinia. Nam efficitur a nunc in tristique. Quisque a
          condimentum ligula. Sed tellus nulla, vestibulum ac feugiat non,
          convallis accumsan dui. Duis vitae enim non ligula tincidunt pretium.
          Nunc massa ipsum, venenatis vitae nulla sit amet, tincidunt dignissim
          mi. Duis in nibh accumsan diam semper ornare. Maecenas malesuada nibh
          ex, a semper arcu suscipit at. Donec a nisi metus. Nam lacinia lacus
          purus, sed aliquet elit malesuada et. Quisque pulvinar massa id eros
          iaculis, quis faucibus lectus ullamcorper. Proin et ante in purus
          cursus porta sed aliquam nisl. Donec ante velit, hendrerit vel eros
          viverra, gravida eleifend magna. Cras sit amet facilisis elit, at
          hendrerit turpis. Sed a dui malesuada, hendrerit neque faucibus,
          suscipit augue. Sed dolor dolor, tempus quis magna in, tincidunt
          facilisis sem. Nunc finibus nisl ac magna fermentum finibus. Nulla
          consequat ornare facilisis. Vivamus placerat tortor eu leo lobortis,
          eu scelerisque risus sagittis. In ac quam mi. Mauris aliquet, augue
          vel vulputate efficitur, est purus venenatis massa, sit amet mollis
          magna est non metus. Duis interdum enim ut rhoncus viverra. Sed
          tempus, eros vitae interdum pulvinar, tortor nunc tincidunt quam, sed
          vestibulum leo eros id magna. Aliquam erat volutpat. Donec dolor nibh,
          imperdiet eu ligula ac, feugiat porta diam. Nullam sollicitudin eros
          elit, a vulputate mi aliquam vitae. Nunc porttitor ac nisl quis
          pharetra. Vivamus luctus lacus finibus lectus tristique varius. Nam id
          faucibus purus. Ut quis porttitor risus. Duis euismod et velit id
          sagittis. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Sed malesuada eget erat id
          consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Quisque finibus tellus dignissim ante
          efficitur commodo. In hac habitasse platea dictumst. Donec eu urna nec
          tortor sollicitudin aliquam. Phasellus hendrerit tempor leo, in rutrum
          ex volutpat eget. Suspendisse semper ullamcorper justo. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Phasellus vitae viverra tortor. Donec orci sapien, pharetra
          quis semper in, posuere eget nunc. Aliquam interdum aliquam massa non
          pharetra. Integer vulputate libero lorem, a laoreet purus ultricies
          et.
        </p>
      </div>
      <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
    </div>
  );
}

export default Dashboard;
