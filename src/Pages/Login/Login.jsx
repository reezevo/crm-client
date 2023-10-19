import React, { useEffect, useRef } from 'react'
import {login, setToken} from '../../services/apiservice';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/userreducer';
import { useNavigate, Link } from 'react-router-dom';
import './login.scss';
function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const emails = email.current.value
      const passwords = password.current.value
    

    try {
      const response = await login(emails,passwords)
      console.log("token", response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate('/dashboard');
      dispatch(getUser());
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className='login-body'>
    <div className='login-login-container'>
      <div className='login-left-container'>
        <h2>Welcome<br class="mobile-hidden" />&nbsp;Back!</h2>
        <p>Please fill in the form to log in.</p>
      </div>
      {/* <img className='login-bgYellow' src={bgImage} alt="background" /> */}
      <div className='login-right-container'>
        <div className='login-right-content'>
          <form className='login-form' onSubmit={handleSubmit}>
            <h2 className='login-logintext'>Login</h2>
            <div className='login-input'>
              <label htmlFor="email">Email</label>
              <input type="text" ref={email} id="email" required />
            </div>
            <div className='login-input'>
              <label htmlFor="password">Password</label>
              <input type="password" ref={password} id="password" required />
            </div>
            <div className='login-input check'>
              <input type="checkbox" /> <span className='login-span'>&nbsp;Keep me signed in</span>
            </div>
            <button className='login-button' onClick={handleSubmit}>Login</button>
          </form>
        </div>
        <div className="login-right-bottom">
          Want To Create A New Account? &nbsp; <Link to="/register" className='login-linktext'>Sign Up</Link>
        </div>
      </div>
</div>





    </div>
  )
}

export default Login