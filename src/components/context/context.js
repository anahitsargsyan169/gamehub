import { createContext, useContext } from "react";

export const AuthStateContext = createContext();
// const AuthDispatchContext = createContext();

export function useAuthState(){
    return useContext(AuthStateContext);
}

// export function useAuthDispatch(){
//     return useContext(AuthDispatchContext);
// }