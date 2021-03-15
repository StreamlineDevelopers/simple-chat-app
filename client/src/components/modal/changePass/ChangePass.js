import React from 'react';

const ChangePass = ({ formSubmitHandler, inputChangeHandler, error, isLoading }) => {
    return(
        <div className="change-pass-modal">
            <div className="change-pass-modal__wrapper">
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <input id="current_password" onChange={e => inputChangeHandler(e)} className="normal-1" type="password" autoComplete="off" name="currentPassword" required/>
                        <label className="normal-1" htmlFor="password">Current Password</label>
                    </div>
                    <div>
                        <input id="new_password" onChange={e => inputChangeHandler(e)} className="normal-1" type="password" autoComplete="off" name="newPassword" required/>
                        <label className="normal-1" htmlFor="password">New Password</label>
                    </div>
                    <div>
                        <input id="confirm_password" onChange={e => inputChangeHandler(e)} className="normal-1" type="password" autoComplete="off" name="confirmNewPassword" required/>
                        <label className="normal-1" htmlFor="password">Confirm Password</label>
                    </div>
                  
                    {error ? <span className='error'>{error}</span>: ''}

                    {isLoading ? 
                        (<i className="fa fa-circle-o-notch fa-spin"></i>): (<button className="normal-1" type="submit">update</button>)
                    } 
                 
                </form>
            </div>
        </div>
    )
}

export default ChangePass;