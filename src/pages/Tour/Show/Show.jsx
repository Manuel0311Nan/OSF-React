import React from "react";
import styles from "./Show.module.scss"
const Show = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={props.poster} alt='img' />
      <h1 className={styles.card__when}>{props.when}</h1>
          <h1 className={styles.card__where}>{props.where}</h1>
          <h1 className={styles.card__who}>{props.who}</h1>
          <h1 className={styles.card__how}>{props.how}</h1>
    </div>
  );
};

export default Show;
