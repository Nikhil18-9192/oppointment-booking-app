function Reducer(state,action){
    switch(action.type){
        case "toggle":
            return {
                ...state,
                toggle: action.payload,
                };
        case 'slot':
            return {
                ...state,
                slot: action.payload
            }
        default:
            return state
    }
}

export default Reducer;