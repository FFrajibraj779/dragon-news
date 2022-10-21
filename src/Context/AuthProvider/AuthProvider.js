import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firbase.config';

export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

        })

        return () => {
            unSubscribe();
        }
    }, [])

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
const veriryEmail = () =>{
    return sendEmailVerification(auth.currentUser);
}

    const authInfo = { user, loading, userLogin,
         LogOut, createUser, emailLogin ,updateUserProfile, veriryEmail}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;