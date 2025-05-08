import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null | undefined;
    fetchUser: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<User | null | undefined>(undefined);

    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    const fetchUser = async () => {
        try {
            const response = await axios.get('/user');
            setUser(response.data);
        } catch(e) {
            setUser(null);
        }
    }

    console.log(user);

    const logout = async () => {
        try {   
            await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/logout');
            setUser(null);
            console.log(response)
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])


    return (
        <AuthContext.Provider value={{user, fetchUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(context == undefined)
        throw new Error("useAuth must be used inside AuthProvider!")

    return context;
};
