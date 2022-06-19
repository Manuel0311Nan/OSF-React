import React, { useState, useEffect} from "react";
import styles from './Sentences.module.scss'
const Sentences = () => {
  const BASEURL =
    "https://62af3129b0a980a2ef3bea9f.mockapi.io/mapianoRajoy/v1";
  const ITEMSURL = "/Sentences";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sentences, setSentences] = useState([]);

  useEffect(() => {
    fetch(BASEURL + ITEMSURL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSentences(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <figure className={styles.container}> 
        <h1 className={styles.title}>Opiniones de nuestros fans</h1> 
      <ul className={styles.card}>
        {sentences.map((sentence) => (
          <li className={styles.card__body} key={sentence.id}>
          <img className={styles.card__img}  src={sentence.Image} alt="..." width="120px"/>
          <div className={styles.card_title}>
            <h2 className={styles.card__title1}> <q>{sentence.Sentence}</q> </h2> 
            <h3 className={styles.card__title1}>{sentence.Year}</h3>
            </div>
          </li>
        ))}
      </ul>
      </figure>
    );
  }
};
export default Sentences;
