import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google login 
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

            }).catch((error) => {
                setError(error.message);
            });
    };

    // create user with email and pass 
    const handleEmailPasswordRegister = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // Login user with email and pass 
    const handleEmailPasswordLogin = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {

            })
            .catch((error) => {
                setError(error.message);
            });
        setIsLoading(false)
    };

    // observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [auth]);

    // sign out user 
    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setUser({});
            setError(error.message);
        });
    }

    return {
        user,
        error,
        setError,
        handleGoogleLogin,
        handleEmailPasswordLogin,
        handleEmailPasswordRegister,
        handleLogOut,
        isLoading,
        setIsLoading,
        setUser
    };
};

export default useFirebase;