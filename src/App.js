import { Routes, Route } from "react-router-dom";
import {useState} from "react"
import { AuthStateContext } from "./components/context/context";
import FavoritesContextProvider from "./components/context/FavoritesContext";

// pages & components
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import NotFound from "./components/pages/NotFound";
import Main from "./components/layout/Main";
import Login from "./components/pages/LogIn";
import Profile from "./components/pages/Profile";
import Game from "./components/pages/Game";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);

  return (
    <AuthStateContext.Provider value={{ user, setUser, isAuthenticated, userHasAuthenticated }}>
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
          <Route path="games/:path" element={<Game />} />
          {/* <Route path="/leaderboard" element={<PrivateRoute><Profile /></PrivateRoute>}/> */}
        </Routes>
      </Main>
      </FavoritesContextProvider>
    </AuthStateContext.Provider>
  );
}

export default App;