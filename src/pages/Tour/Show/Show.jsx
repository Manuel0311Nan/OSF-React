import React from "react";
import styles from "./Show.module.scss"
const Show = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={props.poster} alt='img' />
      {/* <div  className={styles.card__t}>
      <h1 className={styles.font}>{props.when}</h1>
          <h1 className={styles.font}>{props.where}</h1>
          <h1 className={styles.font}> <span className={styles.card__tWhoSe}>With:</span> {props.who}</h1>
        <h1 className={styles.font}>{props.how}</h1>
        </div> */}
    </div>
    
  );
};

export default Show;
