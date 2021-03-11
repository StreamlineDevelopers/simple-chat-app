import React from 'react';

const UserDetails = ({ data }) => {
    return(
        <div className="user-details-modal">
            <div className="user-details-modal__wrapper">
                <div className="user-details-modal__wrapper-info">
                    <h2>hellochat</h2>
                    <div> 
                        <label className="normal-1" htmlFor="firstName">Full Name </label>
                        <span className="normal-1" name="firstName">{ `${data.firstname} ${data.lastname}`}</span>
                    </div>
                    <div> 
                        <label className="normal-1" htmlFor="email">Email </label>
                        <span className="normal-1" name="email">{ data.email }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;