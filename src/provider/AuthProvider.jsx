import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

export default function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
};


// Login
const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};


// Log Out
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

const authInfo = {
    createUser,
    logIn,
    user,
    loading,
    logOut
}

useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('User auth state', currentUser)
        setUser(currentUser);
        setLoading(false);
    })
    return () => {
        unsubscribe();
    }
}, [])
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
