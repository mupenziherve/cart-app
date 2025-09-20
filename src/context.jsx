import { useContext, useReducer, useEffect,
     createContext} from "react";
import cartItems from "./data";
import reducer from "./reducer";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './action'

const AppContext = createContext();


 const initialState  ={
    loading: false,
    cart: new Map(cartItems.map((item) => 
        [item.id, item])),
 };

export const AppProvider = ({children}) =>{
     const [state, dispatch]= useReducer(reducer,initialState);
     const clearCart = () => {
         dispatch ({type: CLEAR_CART});

     };
   
    return (

        <AppContext.Provider 
        value={{...state, clearCart}}>{children}</AppContext.Provider>
    );

};

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
