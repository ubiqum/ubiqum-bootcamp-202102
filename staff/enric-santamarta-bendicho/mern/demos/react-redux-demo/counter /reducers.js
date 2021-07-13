const { combineReducers } = Redux

const counter = (state = 10, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 4
        case "DECREMENT":
            return state - 1
        default:
            return state 
    }
}

const rootReducer = combineReducers({mycounter: counter})