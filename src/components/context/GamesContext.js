import { createContext, useContext } from "react";

export const GamesContext = createContext();

export function useGamesContext(){
    return useContext(GamesContext);
}
