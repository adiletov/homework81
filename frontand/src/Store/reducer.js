import {ORDER_URL_ID_SUCCESS} from "./actionOrder";

const initialState = {
    idUrl: null
};

const reducer = (state= initialState, action)=>{
    switch (action.type) {
        case ORDER_URL_ID_SUCCESS:
            return {...state, idUrl: action.idUrl};
        default:
            return state
    }
};

export default reducer;