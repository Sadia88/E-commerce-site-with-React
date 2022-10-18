import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from '../../images/Logo.svg'
import'./Header.css'

const Header = () => {

    const {user,logOut}=useContext(AuthContext)
    return (
        <nav className='header'>
          <img src={logo} alt="" /> 
         {user?.uid &&  <p>welcome {user?.email}</p>}
          <div>
            <Link to={'/'}>Shop</Link>
            {/* <a href="/shop">Shop</a> */}
           
            <Link to={"/orders"}>Orders</Link>
            <Link to={"/inventory"}>Inventory</Link>
            <Link to={"/about"}>About</Link>
           {
           user?.uid?
           <button className="btn"  onClick={logOut}>Sign Out</button>
           : 
           <> <Link to='/login'>Login</Link>
           <Link to='/signup'>Sign up</Link></>

           }
       
            
            </div> 
        </nav>
    );
};

export default Header;