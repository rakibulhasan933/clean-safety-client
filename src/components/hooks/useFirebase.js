import { useEffect, useState } from "react"
import InitializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

InitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);

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
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);
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
    };

    return {
        user,
        logout,
        admin,
        // setUser,
        singInUsingInGoogle
    }
}
export default useFirebase;
