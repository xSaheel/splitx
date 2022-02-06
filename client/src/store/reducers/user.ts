import { IUserData } from "../../types";
import { actions } from "../actions/user";

const initialState: IUserData | null = null;

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_USER: 
            return {...state};
        case actions.SET_USER: 
            return {...state};
        default:
            return state;
    }
}

export default userReducer;