import React from "react";
import styles from "./Show.module.scss"
const Show = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={props.poster} alt='img' />
      <div  className={styles.card__t}>
      <h1 className={styles.card__tWhen}>{props.when}</h1>
          <h1 className={styles.card__tWhere}>{props.where}</h1>
          <h1 className={styles.card__tWho}> <span className={styles.card__tWhoSe}>With:</span> {props.who}</h1>
        <h1 className={styles.card__tHow}>{props.how}</h1>
        </div>
    </div>
    
  );
};

export default Show;
