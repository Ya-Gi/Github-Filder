import React, { useReducer } from "react";
import AlertReducer from "../reducers/alertReduser";

export const AletContext = React.createContext();

const AlertContextProvider = (props) => {
     const[state,dispatch] = useReducer(AlertReducer,null);

    const displayAlert = (msg, type) => {
        dispatch({type:"SET_ALERT", error:{msg,type}})

        setTimeout(() => {
        dispatch({type:"REMOVE_ALER"})
        }, 3000);
    } 
    return (
        <AletContext.Provider value={{
          error:state,
          displayAlert
        }}>
            {props.children}

        </AletContext.Provider>
    );

} 
export default AlertContextProvider;