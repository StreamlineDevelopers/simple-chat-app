import React from 'react';
import { ReactComponent as RoomBtn } from '../../assets/svg/room_btn.svg';
import { ReactComponent as ProfileBtn } from '../../assets/svg/profile_btn.svg';

const Dashboard = (props) => {
    let joinClickHandler = props.joinClickHandler;
    let profileClickHandler = props.profileClickHandler;
    let isUpdateLoading = props.isUpdateLoading;
    let isUserLoading = props.isUserLoading;
    let user = props.user;
    
    return(
        <div className="dashboard">
            <div className="dashboard-wrapper">
                <h1>{user.data && `welcome, ${user.data?.firstName} ${user.data?.lastName}`}</h1>
             
                <div className="dashboard__buttons">
                    <div className="dashboard__buttons-room" onClick={e => joinClickHandler(e)}>
                        <RoomBtn/>
                        <button>
                            {isUpdateLoading ? 
                                (<i className="fa fa-circle-o-notch fa-spin"></i>): (<h2>join room</h2>)
                            } 
                        </button>
                    </div>
                    <div className="dashboard__buttons-profile" onClick={e => profileClickHandler(e)}>
                        <ProfileBtn/>
                        <button>
                            {isUserLoading ? 
                                (<i className="fa fa-circle-o-notch fa-spin"></i>): (<h2>profile</h2>)
                            } 
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;