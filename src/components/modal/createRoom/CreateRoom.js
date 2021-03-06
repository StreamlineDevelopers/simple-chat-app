import React from 'react';

const CreateRoom = ({formSubmitHandler, handleTextOnChange}) => {

    return(
        <div className="create-room-modal">
            <div className="create-room-modal__wrapper">
                <form onSubmit={formSubmitHandler}>
                    <label className="normal-1" htmlFor="room">room name</label>
                    <input onChange={e => handleTextOnChange(e)} autoComplete="off" className="normal-1" placeholder="Room" name="room"/>
                    <input className="normal-1" type="submit" value="create"/>
                </form>
            </div>
        </div>
    )
}

export default CreateRoom;