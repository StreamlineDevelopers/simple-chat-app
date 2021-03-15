import axiosInstance from '../../../helper/axiosInstance';
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  COULD_NOT_CONNECT
} from '../../../constants/actionTypes';

export const registerAction = (input) => async(authDispatch)=> {
  try {
    authDispatch({
      type: REGISTER_LOADING,
    }); // call dispatch to set loading to true
  
    const axios = await axiosInstance().post('/auth/register', input);

    authDispatch({
      type: REGISTER_SUCCESS,
      payload: axios.data,
    }); // call dispatch to set loading to false 
    // console.log('res', axios);

  } catch (err) {
    authDispatch({
      type: REGISTER_ERROR,
      payload: err.response ? err.response.data :  COULD_NOT_CONNECT,
    }); // call dispatch to set loading to false 
    // console.log('err', err);
  }
};

