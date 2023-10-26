import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(null);

    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const observer = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)

        })
        return () =>{
            observer()
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        singIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;