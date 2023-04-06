const UserReduser =(state,action) => {
    switch(action.type) {
        case "SEARCE_USERS":
            return{
                ...state,
                users:action.users,
                loading:false
            }
        case "SET_LOADING": 
            return {
                ...state,
                loading:true
            }
        case "REMOVE_USERS":
            return {
                ...state,
                users:[],
                loading:false
            }
        default:
            return state;
    }

}
export default UserReduser;