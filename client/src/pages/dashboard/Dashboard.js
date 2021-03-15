import React from 'react';

const Dashboard = (props) => {
    let joinClickHandler = props.joinClickHandler;
    let profileClickHandler = props.profileClickHandler;
    let isUpdateLoading = props.isUpdateLoading;
    let isUserLoading = props.isUserLoading;
    
    return(
        <div className="dashboard">
            <div className="dashboard-wrapper">
                <h1>hellochat</h1>

                <div className="dashboard__buttons">
                    <button onClick={e => joinClickHandler(e)}>
                        {isUpdateLoading ? 
                            (<i className="fa fa-circle-o-notch fa-spin"></i>): (<h2>join room</h2>)
                        } 
                    </button>
                    <button onClick={e => profileClickHandler(e)}>
                        {isUserLoading ? 
                            (<i className="fa fa-circle-o-notch fa-spin"></i>): (<h2>profile</h2>)
                        } 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;