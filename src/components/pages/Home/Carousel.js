import {useState} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import { useGamesContext } from "../../context/GamesContext";

import styles from "./Carousel.module.css";

const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const { allGames } = useGamesContext();
    
    const shuffled = [...allGames];
    const selected = shuffled.sort(() => 0.5 - Math.random()).slice(0, 3);
    const slides = [
        "./xo.png",
        "./2048.png",
        "./millionaire.png"
    ];

    const CarouselLeftArrow = ({onClick}) => {
        return (
            <>
            <img className={styles.carousel_arrow} />
            <span className={styles.angle} onClick={onClick}>
                    <AiOutlineArrowLeft className={styles.arrow_icon}/>
                </span>
            </>
        );
    }
    
    const CarouselRightArrow = ({onClick}) => {
        return (
            <>
                <img className={styles.carousel_arrow} />
                <span className={styles.angle} onClick={onClick}>
                    <AiOutlineArrowRight className={styles.arrow_icon}/>
                </span>
            </>
        );
    }
    
    const CarouselIndicator = (props) => {
        const {index,slide,onClick}= props;
        return (
            <li>
            <a
                className={
                index == activeIndex
                    ?  `${styles.carousel_indicator} ${styles.carousel_indicator_active}`
                : `${styles.carousel_indicator}`
                }
                onClick={onClick}
            />
            </li>
        );
    }
    
    const CarouselSlide = (props) => {
        const {index,slide}= props;
        return (
            <li
            className={
                index === activeIndex
                ?  `${styles.carousel_slide} ${styles.carousel_slide_active}  ${styles.slide}`
                : `${styles.carousel_slide}`
            }
            >
            <Link to={`/games/${slide.path}`} >
                <img src={slide.src} className={styles.carousel_slide_content}></img>
            </Link>

            </li>
        );
        }
    

        const goToSlide = (index) => {
            setActiveIndex(index)
        }

        const goToPrevSlide =(e) => {
            e.preventDefault();
        
            let index = activeIndex;
            let slidesLength = slides.length;
        
            if (index < 1) {
            index = slidesLength;
            }
        
            --index;
        
            setActiveIndex(index);
      }
    
      const goToNextSlide = (e) => {
        e.preventDefault();
    
        let index = activeIndex;
        let slidesLength = slides.length - 1;
    
        if (index === slidesLength) {
          index = -1;
        }
    
        ++index;
    
        setActiveIndex(index)
      }
    
        return (
            <div className={styles.carousel}>
                <div className={styles.carousel_body}>
            <CarouselLeftArrow onClick={e => goToPrevSlide(e)} />

            <ul className={styles.carousel_slides}>
                {selected.map((slide, index) =>
                <CarouselSlide
                    key={index}
                    index={index}
                    slide={slide}
                />
                )}
            </ul>

            <CarouselRightArrow onClick={e => goToNextSlide(e)} />

            
                </div>
                <ul className={styles.carousel_indicators}>
                {slides.map((slide, index) =>
                <CarouselIndicator
                    key={index}
                    index={index}
                    activeIndex={activeIndex}
                    onClick={e => goToSlide(index)}
                />
                )}
            </ul>
            </div>
        );
                }

export default Carousel