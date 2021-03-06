import React from 'react';

const JoinRoom = ({formSubmitHandler}) => {
    return(
        <div className="join-room-modal">
            <div className="join-room-modal__wrapper">
                <form onSubmit={formSubmitHandler}>
                    <label className="normal-1" htmlFor="rooms">chat room</label>
                    <select className="normal-1" id="rooms" name="rooms">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input className="normal-1" type="submit" value="join"/>
                </form>
            </div>
        </div>
    )
}

export default JoinRoom;