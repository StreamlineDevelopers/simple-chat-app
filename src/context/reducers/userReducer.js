import {
    USER_FOUND,
    USER_NOT_FOUND,
    USER_LOADING
} from "../../constants/actionTypes";
  
import userInitialState from '../intialstates/userInitialStates.js';

const userReducer = (state, { payload, type }) => {
    switch (type) {
        case USER_LOADING: {
            return {
                ...state,
                user:{
                    ...state.user,
                    isLoading: true,
                    isFound: false,
                    error: false
                }
            };
        }
        case USER_FOUND: {
            return {
                ...state,
                user:{
                    ...state.user,
                    isFound: false,
                    data: payload,
                    error: false,
                    isLoading: false,
                }
            };
        }
        case USER_NOT_FOUND: {
            return {
                ...state,
                user:{
                    ...state.user,
                    isFound: false,
                    error: payload,
                    isLoading: false,
                }
            };
        }
        default:
            return state;
    }
};

export default userReducer;
  