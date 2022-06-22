import React, {useState, useEffect} from 'react'
import style from "./About.module.scss"
import { useTheme } from '../../context/Themcontext';
const About = () => {
    const { theme } = useTheme();
    const BASEURL =
        "http://localhost:5000/band";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [band, setBand] = useState([]);

    useEffect(() => {
        fetch(BASEURL)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBand(result.data.band);
                    console.log(result.data.band,"result")
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    console.log(band, "imprimo")
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={style.about} style={{
                backgroundColor: theme.background2,
                color:theme.color1
              }}>
            <h1>One second Faith</h1>
            <ul className={style.container}>
                    {band.map((member) => (
                        <li className={style.container__card}>
                            <div className={`${style.container__card__front} ${style.container__card__face}`}>
                                <img className={style.container__card__front__img}  src={member.image} alt="..." width="300px" />
                                <h2 className={style.container__text}>{member.nickName}</h2>
                            </div>
                            <div className={`${style.container__card__back} ${style.container__card__face}`}>
                            <h2 className={style.container__text}>{member.name}</h2>
                            <h2 className={style.container__text}>{member.instrument}</h2>
                            </div>
                            </li>
                    ))};
                </ul>
                </div>
)}
}
export default About