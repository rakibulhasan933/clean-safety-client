import { useEffect, useState } from "react"
import InitializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken, signOut } from "firebase/auth";

InitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

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
        fetch(`https://ancient-lowlands-84914.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                        // console.log(idToken);
                    })
            } else {
                setUser({});
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
        token,
        setUser,
        singInUsingInGoogle
    }
}
export default useFirebase;
