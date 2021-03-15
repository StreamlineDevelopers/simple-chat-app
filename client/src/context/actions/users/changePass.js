import axiosInstance from '../../../helper/axiosInstance.js';
import {
    CHANGE_PASS_LOADING,
    CHANGE_PASS_SUCCESS,
    CHANGE_PASS_ERROR,
    COULD_NOT_CONNECT
} from "../../../constants/actionTypes";

export const changePass = (history, input, setIsActive) => async(changePassDispatch) => {
  
    try {
        let token = localStorage.jwt_token;
        let decoded = jwtTokenDecoder(token);
    
        changePassDispatch({
            type: CHANGE_PASS_LOADING,
        }); // call dispatch to set loading to true
         
        const axios = await axiosInstance(history).put(`/auth/change-password/${decoded._id}`, input, {
            headers: {
                'jwt_token': localStorage.jwt_token
            }
        })
        changePassDispatch({
            type: CHANGE_PASS_SUCCESS,
            payload: axios.data,
        });
        setIsActive(false);
        // console.log(axios.data)
        history.push('/profile');

    } catch (err) {
        changePassDispatch({
            type: CHANGE_PASS_ERROR,
            payload: err.response ? err.response.data : COULD_NOT_CONNECT,
        });
    //   console.log(err.response.data)
    }
};

const jwtTokenDecoder = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }; // used a function that can decode a jwt token // i used this so that i dont have to use any library
  