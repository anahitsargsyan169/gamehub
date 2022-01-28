import { useState, useEffect, createContext } from "react";

import { useGamesContext } from "../context/GamesContext";


import GameList from "../games/GameList";
import { Debounce } from "../debounce";
import search from "../images/search.png"
import Carousel from "../Carousel";
import Header from "../layout/Header";

// styles
import styles from "./Home.module.css";

const Home = () => {
    const [filteredGames, setFilteredGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    const { allGames, setAllGames } = useGamesContext();
    

    useEffect(() => {
      fetch('./gamesData.json')
      .then((res) => res.json())
      .then((data) => {
          if(data){
            const games = [...data];
            setAllGames(games);
          }
      })
      .catch(error => {
          alert("Something went wrong. Please try again later.");
      });
    },[]);

    useEffect(() => {
      if (searchTerm && allGames) {
        setFilteredGames(
          allGames.filter((game) =>
            game.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }, [searchTerm, allGames]);

  return (

    <div>
              <Header />
      <div className={styles.searchBox}>
            <input className={styles.searchInput} type="text" name="" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for games"/>
            <button className={styles.searchButton}>
                <img className={styles.material_icons} src={search} alt="search"/>
            </button>
        </div>
        <div>
            <Carousel/>
        </div>

      <div className={styles.games_content}>
      {searchTerm && filteredGames.length === 0 && (
          <p className="text-center">Sorry, no games found :(</p>
        )}
        {allGames && (
          <GameList games={searchTerm ? filteredGames : allGames} />
        )}
      </div>
      </div>
  );
};

export default Home;
