import { createContext,useState, useEffect} from "react";
import { auth, provider } from "../lib/firebase";
import { signOut, onAuthStateChanged, User, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
type UserProviderValue = {
    currentUser: User|null,
    signupWithGoogle : ()=>void,
    logOut : ()=> void
}
type UserProviderProps = {
    children?: React.ReactNode
}
export const UserContext = createContext({} as UserProviderValue);
export function UserProvider({children}: UserProviderProps) {
    const [currentUser,setCurrentUser] = useState<User | null>(null)
    async function signupWithGoogle() {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setCurrentUser(user);
                <Navigate to="/dashboard" replace={true}/>
            })
    }
    async function logOut() {
        await signOut(auth)
        .then(() => {
            <Navigate to={'/'} replace={true}/>
            setCurrentUser(null);
        })
    }
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
          })
        return unsubscribe
    }, [])
    
    const value: UserProviderValue | null = {
        currentUser,
        signupWithGoogle,
        logOut,
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
