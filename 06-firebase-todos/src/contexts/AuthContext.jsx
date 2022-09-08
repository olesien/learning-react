import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile,
    updateEmail,
    updatePassword,
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

    const setDisplayNameAndPhotoUrl = async (displayName, photoURL) => {
        if (photoURL.length > 1) {
            return updateProfile(auth.currentUser, {
                displayName,
                photoURL,
            });
        } else {
            return updateProfile(auth.currentUser, {
                displayName,
            });
        }
    };

    const updateMail = async (mail) => {
        return updateEmail(auth.currentUser, mail);
    };
    const changePassword = async (password) => {
        return updatePassword(auth.currentUser, password);
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
        setDisplayNameAndPhotoUrl,
        updateMail,
        changePassword,
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
