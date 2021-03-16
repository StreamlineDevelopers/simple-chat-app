import axiosInstance from '../../../helper/axiosInstance.js';
import {
    UPDATE_USER_LOADING,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    COULD_NOT_CONNECT
} from "../../../constants/actionTypes";

export const updateUserInfo = (history, input, reqData, isDecode, linkto=null, type, setIsActive) => async(updateUserDispatch) => {
  try {
    let decoded;

    if(isDecode){
      decoded = jwtTokenDecoder(reqData);
    }else{
      decoded = reqData;
    }

    // console.log('THIS IS SET ID', decoded)

    updateUserDispatch({
        type: UPDATE_USER_LOADING,
    }); // call dispatch to set loading to true

    const axios = await axiosInstance(history).put(`/auth/user/${decoded._id}`, input, {
            headers: {
                'jwt_token': localStorage.jwt_token
            }
        })
        updateUserDispatch({
            type: UPDATE_USER_SUCCESS,
            payload: axios.data,
        });

        // console.log('UPDATED USER',axios.data);
        if(type === 'modal'){
          setIsActive(false);
          alert('Updated Succesfully.');
        } 
        history.push(linkto);
        decoded = null;
  }catch (err) {
    updateUserDispatch({
        type: UPDATE_USER_ERROR,
        payload: err.response ? err.response.data : COULD_NOT_CONNECT,
    });
    // console.log('UPDATED USER',err);
  }
}; // set type parameter to 'modal' if the target is a modal container else just leave it an empty string.

const jwtTokenDecoder = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}; // used a function that can decode a jwt token // i used this so that i dont have to use any library
