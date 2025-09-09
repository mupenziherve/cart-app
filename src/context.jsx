import { useContext, useReducer, useEffect, createContext} from "react";

const AppContext = createContext();

const reducer = createContext()

export const AppProvider = ({children}) =>{

    return (

        <AppContext.Provider 
        value={{}}>{children}</AppContext.Provider>
    );

};

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
