import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
                console.log('logged user:', loggedUser);
                setUser(loggedUser);
                setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const logOut =()=>{
        setLoading(true);
       return signOut(auth);
    }

    const authInfo = {
            user,
            loading,
            createUser,
            signIn,
            logOut,
    } 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;