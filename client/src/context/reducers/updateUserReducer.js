import {
    UPDATE_USER_LOADING,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
} from "../../constants/actionTypes";

const updateUserReducer = (state, { payload, type }) => {
    switch (type) {
        case UPDATE_USER_LOADING: {
            return {
                ...state,
                updateUser:{
                    ...state.updateUser,
                    isLoading: true,
                    error: false
                }
            };
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                updateUser:{
                    ...state.updateUser,
                    result: payload,
                    error: false,
                    isLoading: false,
                }
            };
        }
        case UPDATE_USER_ERROR: {
            return {
                ...state,
                updateUser:{
                    ...state.updateUser,
                    error: payload,
                    isLoading: false,
                }
            };
        }
        default:
            return state;
    }
};

export default updateUserReducer;
  