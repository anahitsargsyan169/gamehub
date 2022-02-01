import { Routes, Route } from "react-router-dom";
import {useState,useEffect} from "react"
import { AuthStateContext } from "./components/context/AuthContext";
import FavoritesContextProvider from "./components/context/FavoritesContext";
import { GamesContext } from "./components/context/GamesContext";

// pages & components
import Home from "./components/pages/Home/Home";
import Favorites from "./components/pages/Favorites";
import NotFound from "./components/pages/NotFound";
import Main from "./components/layout/Main";
import Login from "./components/pages/LogIn";
import Profile from "./components/pages/Profile/Profile";
import Game from "./components/pages/Game";
import PrivateRoute from "./components/PrivateRoute";
import Leaderboard from "./components/pages/LeaderBoard/Leaderboard";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/f71bd5dd-956c-4431-8a4c-9e6d482072ef')
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

  return (
    <AuthStateContext.Provider value={{ user, setUser, isAuthenticated, userHasAuthenticated }}>
      <GamesContext.Provider value={{ allGames, setAllGames}}>
      <FavoritesContextProvider>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="" element={<Profile />}/>
          </Route>
          <Route path="/favorites" element={<PrivateRoute />}>
            <Route path="" element={<Favorites />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="games/:name" element={<PrivateRoute />}>
            <Route path="" element={<Game />} />
          </Route>
          {/* <Route path="games/TicTacToe" element={<Game />} />
          <Route path="games/MemoryGame" element={<MemoryGame />} />
          <Route path="games/Game2048" element={<Game2048 />} /> */}
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Main>
      </FavoritesContextProvider>
      </GamesContext.Provider>
    </AuthStateContext.Provider>
  );
}

export default App;