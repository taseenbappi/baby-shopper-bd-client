import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../Pages/Login/Firebase/firebase.init";
import axios from 'axios';

authInit();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();

    // user email and password register hangler
    const registerHangler = (name, email, password, location, myHistory) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { displayName: name, email };
                setUser(newUser);

                // send user info to database
                axios.post('http://localhost:5000/users', newUser)
                    .then(function (response) {

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                setAuthError("");
                const destination = location?.state?.from || "/home";
                myHistory.replace(destination);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!


                }).catch((error) => {
                    // An error occurred
                    const errorMessage = error.message;
                    setAuthError(errorMessage);
                    // ...
                });
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
                // ..
            }).finally(() => setIsLoading(false));
    }
    // register users login hangler
    const registerUserSignInHangler = (email, password, location, myHistory) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                const destination = location?.state?.from || "/home";
                if (email === "admin@admin.com") {
                    myHistory.push('/dashboard');
                } else {
                    myHistory.replace(destination);
                }
                // myHistory.replace(destination);
                setAuthError("");

                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);

            }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUser(user);
                // ...
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [])

    // logout hangler
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            setAuthError("");
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setAuthError(errorMessage);
        }).finally(() => setIsLoading(false));
    }
    return {
        registerHangler,
        registerUserSignInHangler,
        logOut,
        user,
        authError,
        isLoading
    };

}
export default useFirebase;