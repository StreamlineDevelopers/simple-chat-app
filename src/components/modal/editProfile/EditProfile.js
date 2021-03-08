import React from 'react';

const EditProfile = ({ formSubmitHandler, error, isLoading, refs, updatedData }) => {
    return(
        <div className="edit-profile-modal">
            <div className="edit-profile-modal__wrapper">
                <form onSubmit={formSubmitHandler}>
                    <div> 
                        <input id="firstName" ref={refs.firstName} defaultValue={updatedData?.firstName} className="normal-1" type="text" autoComplete="off" name="firstName" required/>
                        <label className="normal-1" htmlFor="firstName">First Name</label>
                    </div>
                    <div>
                        <input id="lastName" ref={refs.lastName} defaultValue={updatedData?.lastName} className="normal-1" type="text" autoComplete="off" name="lastName" required/>
                        <label className="normal-1" htmlFor="lastName">Last Name</label>
                    </div>
                    <div> 
                        <input id="email" ref={refs.email} defaultValue={updatedData?.email} className="normal-1" type="email" autoComplete="off" name="email" required/>
                        <label className="normal-1" htmlFor="email">Email</label>
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

export default EditProfile;