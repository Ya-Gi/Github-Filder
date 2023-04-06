const AlertReducer = (state,action) => {
    switch(action.type) {
        case "SET_ALERT":
            return action.error;
        case "REMOVE_ALER":
            return null;
        default:
            return state;
            
    }
}
export default AlertReducer;