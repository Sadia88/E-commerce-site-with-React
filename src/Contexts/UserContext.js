import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.initial';

export const AuthContext=createContext()


const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser]=useState({})
    const[loading,setLoading]=useState(true)

    // const user={email:'a@gmail.com'}

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}


useEffect(() => {
  const unsubscribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    setLoading(false)
  })

  return () => {
    unsubscribe()
  }
}, [])

    const authInfo={user,loading,createUser,signIn,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;