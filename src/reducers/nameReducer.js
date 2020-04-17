
//Reducer is a function that will change the global state

export const nameReducer = (state = {name: 'Cam'}, action) => {

    switch (action.type) {
        case "NAME_CHANGE":
            return { ...state, name: action.payload };
        default:
            return state;
    }

}