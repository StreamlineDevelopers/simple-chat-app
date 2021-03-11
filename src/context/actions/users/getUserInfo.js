import axiosInstance from '../../../helper/axiosInstance.js';
import {
  USER_FOUND,
  USER_NOT_FOUND,
  USER_LOADING,
  COULD_NOT_CONNECT
} from "../../../constants/actionTypes";

export const getUserInfo = (history, linkto=null) => async(userDispatch) => {
  try {
    let token = localStorage.jwt_token;
    let decoded = jwtTokenDecoder(token);
  
    // console.log('DECODED USER TOKEN FROM USER',decoded)
    userDispatch({
      type: USER_LOADING,
    }); // call dispatch to set loading to true

    const axios = await axiosInstance(history).get(`/auth/user/?id=${decoded._id}`, {
      headers: {
        'jwt_token': localStorage.jwt_token
      }
    })
    // console.log(axios);
    userDispatch({
      type: USER_FOUND,
      payload: axios.data,
    });

    // console.log('GET USER INFO',axios.data)
    history.push(linkto);

  }catch (err) {
    userDispatch({
      type: USER_NOT_FOUND,
      payload: err.response ? err.response.data : COULD_NOT_CONNECT,
    });
    // console.log('GET USER INFO ERROR',err.response)
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
