import { createContext, useContext } from "react";

export const AuthStateContext = createContext();

export function useAuthState(){
    return useContext(AuthStateContext);
}
