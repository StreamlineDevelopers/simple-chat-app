import axiosInstance from '../../../helper/axiosInstance';
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  COULD_NOT_CONNECT
} from '../../../constants/actionTypes';

export const loginAction = (input) => (authDispatch) => {
  authDispatch({
    type: LOGIN_LOADING,
  }); // call dispatch to set loading to true

  axiosInstance()
    .post('/auth/login', input)
    .then((res) => {
      // store token to local storage
      localStorage.jwt_token = res.data.jwt_token;
      authDispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      }); // call dispatch and store data to payload
      console.log('res', res);
    })
    .catch((err) => {
      authDispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : COULD_NOT_CONNECT,
      }); // call dispatch and store error to payload
      console.log('err', err);
    });
};
