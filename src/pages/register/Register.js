import React from 'react';
import {Link} from 'react-router-dom';

const Register = ({ formClickhandler, inputChangeHandler }) => {
    
    return(
        <div className="register">
          <div className="register-card">
            <h2>hellochat</h2>
            <form onSubmit={e => formClickhandler(e)} >
                <div> 
                    <input id="firstName" onChange={e => inputChangeHandler(e)} className="normal-1" type="text" autoComplete="off" name="firstName" required/>
                    <label className="normal-1" htmlFor="firstName">First Name</label>
                </div>
                <div>
                    <input id="lastName" onChange={e => inputChangeHandler(e)} className="normal-1" type="text" autoComplete="off" name="lastName" required/>
                    <label className="normal-1" htmlFor="lastName">Last Name</label>
                </div>
                <div> 
                    <input id="email" onChange={e => inputChangeHandler(e)} className="normal-1" type="email" autoComplete="off" name="email" required/>
                    <label className="normal-1" htmlFor="email">Email</label>
                </div>
                <div>
                    <input id="password" onChange={e => inputChangeHandler(e)} className="normal-1" type="password" autoComplete="off" name="password" required/>
                    <label className="normal-1" htmlFor="password">Password</label>
                </div>
                <button className="normal-1" type="submit">Register</button>
            </form>
            <Link to="/"><span className="normal-2">Already have an account?</span></Link>
          </div>
        </div>
    )
}

export default Register;