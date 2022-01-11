import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


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

                history.replace(location.state?.from || '/')
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
                saveUser(newUser, 'post');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                    history.replace(location.state?.from || '/')
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
                history.replace(location.state?.from || '/')
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
            axios.put('https://savon-server-sider-api.herokuapp.com/users', newUser)
                .then()
        }
        else {
            axios.post('https://savon-server-sider-api.herokuapp.com/users', newUser)
                .then()
        }

    };

    // make admin
    useEffect(() => {
        axios.get(`https://savon-server-sider-api.herokuapp.com/users?email=${user.email}`)
            .then(res => setAdmin(res.data.admin))
            .catch()
    }, [user.email])

    // upload image to imgBB
    const uploadImage = img => {
        let body = new FormData()
        body.set('key', '7e550a7fc902522e5934b0e3e9a410d8')
        body.append('image', img)

        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        });
    };


    return {
        user,
        error,
        setError,
        uploadImage,
        handleGoogleLogin,
        handleEmailPasswordLogin,
        handleEmailPasswordRegister,
        handleLogOut,
        isLoading,
        setIsLoading,
        setUser,
        admin
    };
};

export default useFirebase;