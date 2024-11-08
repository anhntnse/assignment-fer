import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../config/Config';
import { onAuthStateChanged, signOut } from "firebase/auth";

const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Set user data or null if not logged in
        });
        return unsubscribe;
    }, []);

    const logout = () => signOut(auth);

    return (
        <UserContext.Provider value={{ user, logout }}>
            {children}
        </UserContext.Provider>
    );
};