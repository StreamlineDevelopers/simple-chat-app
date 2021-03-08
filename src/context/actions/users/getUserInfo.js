import axiosInstance from '../../../helper/axiosInstance.js';
import {
  USER_FOUND,
  USER_NOT_FOUND,
  USER_LOADING,
  COULD_NOT_CONNECT
} from "../../../constants/actionTypes";

export const getUserInfo = (history) => (userDispatch) => {
  let token = localStorage.jwt_token;
  let decoded = jwtTokenDecoder(token);
  
  userDispatch({
    type: USER_LOADING,
  }); // call dispatch to set loading to true

  axiosInstance(history)
    .get(`/auth/user/?id=${decoded._id}`, {
      headers: {
        'jwt_token': localStorage.jwt_token
      }
    }).then((res) => {
      userDispatch({
        type: USER_FOUND,
        payload: res?.data,
      });
      // console.log(res.data)
      history.push('/profile');
    }).catch((err) => {
      userDispatch({
        type: USER_NOT_FOUND,
        payload: err.response ? err.response.data : COULD_NOT_CONNECT,
      });
      // console.log(err?.response?.data)
    });
};

const jwtTokenDecoder = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}; // used a function that can decode a jwt token // i used this so that i dont have to use any library
