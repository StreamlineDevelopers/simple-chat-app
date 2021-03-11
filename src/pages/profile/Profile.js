import React from 'react'

//modal components
import EditProfileModal from '../../components/modal/editProfile/EditProfileContainer.js';
import ChangePassModal from '../../components/modal/changePass/ChangePassContainer.js';

const Profile = (props) => {
    let editClickHandler = props.editClickHandler;
    let changePassClickHandler = props.changePassClickHandler;
    let fileOnChangeHandler = props.fileOnChangeHandler;
    let fileOnSubmitHandler = props.fileOnSubmitHandler;

    let data = props.data;
    let isLoading = props.isLoading;

    let editIsActive = props.editIsActive;
    let setIsActive = props.setIsActive;
    let updatedData = props.updatedData;
    let setUpdatedData = props.setUpdatedData;

    let changePassIsActive = props.changePassIsActive;
    let changePassSetIsActive = props.changePassSetIsActive;

    return (
        <div className='profile'>
            <h1>hellochat</h1>
            <div className="profile-wrapper normal-2">
                <div className="profile-avatar"><img className="profile-avatar-img" src="" alt="A"/></div>
                    {isLoading ? ( <i className="fa fa-circle-o-notch fa-spin"></i>):(  
                        <div className="profile-info">
                            <div className="profile-info__name">
                                <div className="profile-info__name-label">
                                    <label htmlFor="name">name: </label>
                                    <span name="name">
                                        {updatedData ? (`${updatedData?.firstName} ${updatedData?.lastName}`):
                                        (`${data?.firstName} ${data?.lastName}`)}
                                    </span>
                                </div>
                                <button onClick={e => editClickHandler(e)} className="buttons profile-info__name-edit normal-2">edit</button>
                            </div>
                            <div className="profile-info__email">
                                <label htmlFor="email">email: </label>
                                <span name="email">
                                    {updatedData ? (`${updatedData?.email}`):(`${data?.email}`)}
                                </span>
                            </div>
                        </div>      
                    )}
                <div className="profile__buttons">
                    <button onClick={e => changePassClickHandler(e)} className="buttons profile-btn-password normal-2">Change Password</button>
                    <form onSubmit={e => {fileOnSubmitHandler(e)}}>
                        <input onChange={e => {fileOnChangeHandler(e)}} type="file" id="myfile" name="myfile"/>
                        <input type="submit" value="upload"/>
                    </form>
                    
                </div>
            </div>
            <EditProfileModal
                isActive = {editIsActive}
                setIsActive = {setIsActive}
                updatedData = {updatedData}
                setUpdatedData = {setUpdatedData}
            />
            <ChangePassModal 
                isActive = {changePassIsActive}
                setIsActive = {changePassSetIsActive}
            />
        </div>
    )
}

export default Profile
