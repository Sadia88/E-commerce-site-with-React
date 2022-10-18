import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import'./SignUp.css'

const SignUp = () => {
const {createUser}=useContext(AuthContext)
    const [error,setError]=useState(null)
    const handleSignUp=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const confirm=form.confirm.value


        if(password.length<6){
            setError("Password must be 6 character or more")
            return

        }
       if(password!==confirm){
        setError("Password din't match")
        return
       }

        // console.log('sign up',email,password,confirm)
       
        
    createUser(email,password)
    .then((result) => {
        // Signed in 
        const user = result.user;
        console.log(user)
        form.reset()
        // ...
      })
      .catch((error) => {
      
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
    }

   
    return (
        <div className='form-container'>
        <h1 className='form-title'>Sign Up</h1>
        <form action="" onSubmit={handleSignUp}>
           <div className='form-control'>
           <label htmlFor="email" placeholder='Email' required>Email</label>
            <input type="email" name='email' />
           </div>
           <div className='form-control'>
           <label htmlFor="password" placeholder='Password' required>Password</label>
            <input type="password" name='password' />
           </div>
           <div className='form-control'>
           <label htmlFor="confirm" placeholder='Confirm Password' required>Confirm Password</label>
          
            <input type="password" name='confirm' /> <br />
           
           </div>

           <span className='error-massage'>{error}</span>
           <input type="submit" className='btn-login' value='Sign Up'/>
           <p>Already have an account?  <Link to='/login'>Login</Link></p>
           
        </form>
    </div>
);
};

export default SignUp;