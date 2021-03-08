import { LOGOUT_USER } from "../../../constants/actionTypes";

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem('jwt_token');
  dispatch({
    type: LOGOUT_USER,
  });
};
