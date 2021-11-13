import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google login 
    const handleGoogleLogin = (history, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const newUser = {
                    email: user.email,
                    displayName: user.displayName
                }
                saveUser(newUser, 'put');

                history.replce(location?.state.from || '/')
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false);
            })
    };

    // create user with email and pass 
    const handleEmailPasswordRegister = (email, password, name, history, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const newUser = { email, displayName: name };
                history.replce(location?.state.from || '/')
                saveUser(newUser, 'post');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => {
                // history.push(location);
                setIsLoading(false);
            })
    };

    // Login user with email and pass 
    const handleEmailPasswordLogin = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                history.replce(location?.state.from || '/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                // history.push(location);
                setIsLoading(false);
            })
    };

    // observer
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
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
    };

    //save user to db
    const saveUser = (newUser, method) => {
        if (method === 'put') {
            axios.put('https://savon-server-sider-api.herokuapp.com/soaps/users', newUser)
                .then()
        }
        else {
            axios.post('https://savon-server-sider-api.herokuapp.com/soaps/users', newUser)
                .then()
        }

    };

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