import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const UserContext =  createContext({})

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const { data } = await axios.get('/profile');
                setUser(data);
                console.log("user context data ", data);
            } catch (err) {
                console.log("err ", err);
            }
        };

        if (!user) {
            fetchUserProfile(); // Fetch user profile data only if user is not already set
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
