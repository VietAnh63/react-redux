import {createStore} from "redux"

const defaultState = {
    num: 10,
    stt: true
}

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case "START":
            return {...state, num:state.num - 1}

        case "STOP":
            return {...state, stt:!state.stt}
            
        case "INCREASE":
            return {...state, num:state.num + 1}

        case "DECREASE":
            return {...state, num:state.num - 1}
        
        case "RESET":
            return {...state, num:10, stt:true}
            
        default:
            return state;
    }
}

const store = createStore(reducers);
export default store;