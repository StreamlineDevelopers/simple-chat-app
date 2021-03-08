import {
    CHANGE_PASS_LOADING,
    CHANGE_PASS_SUCCESS,
    CHANGE_PASS_ERROR,
} from "../../constants/actionTypes";

const changePassReducer = (state, { payload, type }) => {
    switch (type) {
        case CHANGE_PASS_LOADING: {
            return {
                ...state,
                changePass:{
                    ...state.changePass,
                    isLoading: true,
                    error: false
                }
            };
        }
        case CHANGE_PASS_SUCCESS: {
            return {
                ...state,
                changePass:{
                    ...state.changePass,
                    newPassword: payload,
                    error: false,
                    isLoading: false,
                }
            };
        }
        case CHANGE_PASS_ERROR: {
            return {
                ...state,
                changePass:{
                    ...state.changePass,
                    error: payload,
                    isLoading: false,
                }
            };
        }
        default:
            return state;
    }
};

export default changePassReducer;
  