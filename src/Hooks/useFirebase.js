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

authInit();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();


    // user email and password register hangler
    const registerHangler = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError("");
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    setUser(user);
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
                myHistory.push(destination);
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