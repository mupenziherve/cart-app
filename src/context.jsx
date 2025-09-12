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
   
    return (

        <AppContext.Provider 
        value={{...state}}>{children}</AppContext.Provider>
    );

};

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam saepe unde a! Consequuntur dolor omnis perspiciatis repellendus incidunt nisi sunt qui quisquam est? Consequuntur obcaecati delectus facilis incidunt deleniti facere.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla modi expedita doloremque distinctio quibusdam doloribus corporis tempore adipisci, asperiores inventore voluptatem et, in enim mollitia minus non rerum. Rerum!
