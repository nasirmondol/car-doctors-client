import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInUser = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const observer = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)
        });
        return () =>{
            observer()
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        singInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;