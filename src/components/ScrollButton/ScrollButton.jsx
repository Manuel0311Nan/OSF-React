import React, {useState, useEffect} from "react";
// import { Link } from 'react-router-dom'
import  arrowDown  from '../../assets/images/abajo.png';
export const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;

            if (scrollPosition + windowHeight < documentHeight - 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }
    return (
        isVisible && (
            <button 
                className="animate__animated animate__flash"
                onClick={scrollToBottom} 
                style={{
                    position: 'fixed',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor:  '#a41313',
                    color: '#fff',
                    padding: '30px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: 'none'
                }}
                >
                <img width={20} src={arrowDown} alt="downArrow"></img>
                Conócenos 
                <img width={20} src={arrowDown} alt="downArrow"></img>
                </button>
        )
    );

}
