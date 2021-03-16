import React from 'react';
import {Link} from 'react-router-dom';

//svg
import {ReactComponent as Girl} from '../../assets/svg/girl.svg';

const Login = ({ formClickhandler, inputChangeHandler, error, loading }) => {
  
    return(
        <div className="login">
          <div className="login-card">
            <Girl/>
            <h2>hellochat</h2>
            <form onSubmit={e => formClickhandler(e)} >
                <div> 
                    <input id="email" onChange={e => inputChangeHandler(e)} className="normal-1" type="email" autoComplete="off" name="email" required/>
                    <label className="normal-1" htmlFor="email">Email</label>
                </div>
                <div>
                    <input id="password" onChange={e => inputChangeHandler(e)} className="normal-1" type="password" autoComplete="off" name="password" required/>
                    <label className="normal-1" htmlFor="password">Password</label>
                </div>
                {loading ? 
                    (<i className="fa fa-circle-o-notch fa-spin"></i>):(<button className="normal-1" type="submit">Login</button>)
                } 
            </form>

            {error ? <span className='error'>{error}</span>: ''}
            <Link to="/register"><span className="normal-2">Dont have an account?</span></Link>
          </div>
        </div>
    )
}

export default Login;