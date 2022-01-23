import { useState, useEffect } from "react";
import GameList from "../games/GameList";
import { Debounce } from "../debounce";
import search from "../images/search.png"
import Carousel from "../Carousel";

// styles
import styles from "./Home.module.css";

const Home = () => {
    const [allGames, setAllGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      fetch('./gamesData.json')
      .then((res) => res.json())
      .then((data) => {
          if(data){
            const games = [...data];
            console.log(games);
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
      <div className={styles.head_section}>
        <div className="text-center">
          <h1 className={styles.title}>
            Free Games for Browser!
          </h1>
        <div>
            <Carousel/>
        </div>
        </div>

        <div className={styles.searchBox}>
            <input className={styles.searchInput} type="text" name="" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search"/>
            <button className={styles.searchButton}>
                <img className={styles.material_icons} src={search} alt="search"/>
            </button>
        </div>
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
