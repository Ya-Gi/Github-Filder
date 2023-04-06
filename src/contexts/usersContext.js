import React, { useReducer } from 'react';
import UserReduser from "../reducers/usersReducer";


export const UserContext = React.createContext();

const UserContextProvider = (props) => {
    
    const initialState = {
        users:[],
        loading:false
       }
    
    const [state,dispatch] = useReducer(UserReduser,initialState);


  const searchUsers = (keyword) => {
    setLoading();
    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type:"SEARCE_USERS",
            users:data.items
          })
        });
    }, 1000);
  }


    const clearUsers = () => {
        dispatch({type:"REMOVE_USERS"});
    }

    const setLoading =() => {
        dispatch({type:"SET_LOADING"})
    }
return (
    <UserContext.Provider value={{
            users:state.users,
            loading:state.loading,
            searchUsers,
            clearUsers,
            setLoading
     }}>

        {props.children}
    </UserContext.Provider>
);





}
export default UserContextProvider;