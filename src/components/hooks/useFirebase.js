import { useEffect, useState } from "react"
import InitializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

InitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     // console.log(result.user);
        //     setUser(result.user)
        // })

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log("inside user", user);
                setUser(user)
            }
        })
    }, [auth]);
    // LOGOUT
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        user,
        logout,
        // setUser,
        singInUsingInGoogle
    }
}
export default useFirebase;
