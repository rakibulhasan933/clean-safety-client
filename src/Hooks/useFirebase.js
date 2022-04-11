import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const singInUsingGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
        // .then(result => {
        //     // console.log(result.user);
        //     setUser(result.user);
        // })

    }
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        });

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside state ', user);
                setUser(user);
            }
        })
    }, [auth]);


    return {
        user,
        logOut,
        singInUsingGoogle,

    }
}
export default useFirebase;