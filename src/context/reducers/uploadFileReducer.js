import {
    FILE_UPLOAD_LOADING,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_ERROR,
} from "../../constants/actionTypes";

const uploadFileReducer = (state, { payload, type }) => {
    switch (type) {
        case FILE_UPLOAD_LOADING: {
            return {
                ...state,
                uploadFile:{
                    ...state.uploadFile,
                    isFileLoading: true,
                    isFileError: false
                }
            };
        }
        case FILE_UPLOAD_SUCCESS: {
            return {
                ...state,
                uploadFile:{
                    ...state.uploadFile,
                    fileData: payload,
                    isFileError: false,
                    isFileLoading: false,
                }
            };
        }
        case FILE_UPLOAD_ERROR: {
            return {
                ...state,
                uploadFile:{
                    ...state.uploadFile,
                    isFileError: payload,
                    isFileLoading: false,
                }
            };
        }
        default:
            return state;
    }
};

export default uploadFileReducer;
  