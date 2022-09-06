import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // add auth-state observer here (somehow... 😈)

    const contextValues = {
        // here be everything the children needs/should be able to use
        login,
        logout,
        signup,
        resetPassword,
        user,
        loading,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider as default, useAuthContext };
