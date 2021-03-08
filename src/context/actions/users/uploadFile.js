import axiosInstance from '../../../helper/axiosInstance.js';
import {
    FILE_UPLOAD_LOADING,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_ERROR,
    COULD_NOT_CONNECT
} from "../../../constants/actionTypes";

export const uploadFile = (history, formData) => async(uploadFileDispatch) => {
    let token = localStorage.jwt_token;

    try {
        uploadFileDispatch({
            type: FILE_UPLOAD_LOADING,
        }); // call dispatch to set loading to true
    
        const axios = await axiosInstance(history).post(`/auth/upload`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
                'jwt_token': token,
            } 
        })

        uploadFileDispatch({
            type: FILE_UPLOAD_SUCCESS,
            payload: axios.data,
        });

        console.log('Axios on UploadFile',axios.data)
        history.push('/profile');

    }catch (error) {
        uploadFileDispatch({
            type: FILE_UPLOAD_ERROR,
            payload: error.response ? error.response.data : COULD_NOT_CONNECT,
        });

        if(error.response.status === 500){
            console.log('Problem with the server')
        }else{
            console.log(error.response.data)
        }
    }
};