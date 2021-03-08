import axiosInstance from '../../../helper/axiosInstance';
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  COULD_NOT_CONNECT
} from '../../../constants/actionTypes';

export const registerAction = (input) => (authDispatch)=> {
  authDispatch({
    type: REGISTER_LOADING,
  }); // call dispatch to set loading to true

  axiosInstance()
    .post('/auth/register', input)
    .then((res) => {
      authDispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      }); // call dispatch to set loading to false 
      console.log('res', res);
    })
    .catch((err) => {
      authDispatch({
        type: REGISTER_ERROR,
        payload: err.response ? err.response.data :  COULD_NOT_CONNECT,
      }); // call dispatch to set loading to false 
      console.log('err', err);
    });
  };

