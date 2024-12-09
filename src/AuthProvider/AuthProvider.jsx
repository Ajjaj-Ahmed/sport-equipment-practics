import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loader,setLoader] = useState(true);
    const [user, setUser] = useState(null)

    const signUpUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser);
                setLoader(false);
                console.log('user from authProvider:',user)
            }else{
                setLoader(false);
                console.log('user not found')
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[])
const userInfo={
    signUpUser, user,loader,logOut
}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;