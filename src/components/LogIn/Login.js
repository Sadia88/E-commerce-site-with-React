
import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css'

const Login = () => {
    const {signIn,logOut}=useContext(AuthContext)
    console.log('login auth',Login)

    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

    
    const navigate=useNavigate()
    
    const handleLogin=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log('login',email,password)


        signIn(email,password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user)
            form.reset()
           navigate(from, { replace: true })
            // ...
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage)
          });

         
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form action="" onSubmit={handleLogin}>
               <div className='form-control'>
               <label htmlFor="email" placeholder='Email' required>Email</label>
                <input type="email" name='email' />
               </div>
               <div className='form-control'>
               <label htmlFor="password" placeholder='Password' required>Password</label>
                <input type="password" name='password' />
               </div>
               <input type="submit" className='btn-login' value='Login'/>
               <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;