import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_USER
} from '../../constants/actionTypes';

import authInitialState from '../intialstates/authInitialStates.js';

const authReducer = (state, { payload, type }) => {
    switch (type) {
        case REGISTER_LOADING:
        case LOGIN_LOADING:
           return{
               ...state,
               auth:{
                   ...state.auth,
                   error: false,
                   loading: true
               }
           } // set loading to true and error to false if on REGISTER_LOADING or LOGIN_LOADING is active
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    error: false,
                    loading: false,
                    user: payload
                }
            } // set loading to false and error to false and store user id if on REGISTER_SUCCESS or LOGIN_SUCCESS is active
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    error: payload,
                },
            }; // set loading to false and store error from backend if REGISTER_ERROR or LOGIN_ERROR is active
        case LOGOUT_USER:
            return {
                ...state,
                authInitialState
            }; // set loading to false and store error from backend if REGISTER_ERROR or LOGIN_ERROR is active
        default:
            return state;
    }

}

export default authReducer;