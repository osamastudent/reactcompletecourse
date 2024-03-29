const initialStateTwo = 5;
const initialState = 100;

export const addMinus = (state = initialStateTwo, action) => {
    switch (action.type) {
        case "add":
            return state + 5;
        case "minus":
            return state - 5;
        case "reset":
            return state * 0;
        default:
            return state

    }
}
export const addMinus2 = (state = initialState, action) => {
    switch (action.type) {
        case "add2":
            return state + 100;
        case "minus2":
            return state - 100;
        case "reset2":
            return state * 0;
        default:
            return state

    }
}


// export default addMinus;