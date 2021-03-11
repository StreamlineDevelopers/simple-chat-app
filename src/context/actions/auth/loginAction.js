import axiosInstance from '../../../helper/axiosInstance';
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  COULD_NOT_CONNECT
} from '../../../constants/actionTypes';

export const loginAction = (input) => async(authDispatch) => {
  try {
    authDispatch({
      type: LOGIN_LOADING,
    }); // call dispatch to set loading to true
  
    const axios = await axiosInstance().post('/auth/login', input);
    // store token to local storage
    localStorage.jwt_token = axios.data.jwt_token;

    authDispatch({
      type: LOGIN_SUCCESS,
      payload: axios.data
    }); // call dispatch and store data to payload

    // console.log('loginInfo',axios);

  } catch (err) {
    authDispatch({
      type: LOGIN_ERROR,
      payload: err.response ? err.response.data : COULD_NOT_CONNECT,
    }); // call dispatch and store error to payload

    // console.log('loginInfoError', err);
  }
};
