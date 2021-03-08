import React, { useReducer } from 'react';
import AppContext from './AuthContext.js';

import AuthInitialStates from './intialstates/authInitialStates.js';
import UserInitialStates from './intialstates/userInitialStates.js';
import UpdateUserInitialStates from './intialstates/updateUserInitialStates.js';
import ChangePassInitialStates from './intialstates/changePassInitialStates.js';
import UploadFileInitialStates from './intialstates/uploadFileInitialStates.js';

import AuthReducer from './reducers/authReducer.js';
import UserReducer from './reducers/userReducer.js';
import UpdateUserReducer from './reducers/updateUserReducer.js';
import ChangePassReducer from './reducers/changePassReducer.js';
import UploadFileReducer from './reducers/uploadFileReducer.js';

const AppState = ({ children }) => {

    const [authState, authDispatch] = useReducer(AuthReducer, AuthInitialStates);
    const [userState, userDispatch] = useReducer(UserReducer, UserInitialStates);
    const [updateUserState, updateUserDispatch] = useReducer(UpdateUserReducer, UpdateUserInitialStates);
    const [changePassState, changePassDispatch] = useReducer(ChangePassReducer, ChangePassInitialStates);
    const [uploadFileState, uploadFileDispatch] = useReducer(UploadFileReducer, UploadFileInitialStates);

    return (
        <AppContext.Provider value = {{
            authState, authDispatch,
            userState, userDispatch,
            updateUserState, updateUserDispatch,
            changePassState, changePassDispatch,
            uploadFileState, uploadFileDispatch
        }}>

        { children }
        </AppContext.Provider>
    )
}

export default AppState;