import { createContext, useEffect, useState } from "react";
import { IAuthContext, IProvider, IUser } from "../interfaces/context";
import { api } from "../service/api";

export const AuthContext = createContext({} as IAuthContext)

export const Provider = ({children}: IProvider) => {

	const [user, setUser] = useState<IUser | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
        async function loadUser() {
        const token = localStorage.getItem("@token");
        const userLogged = localStorage.getItem("@user");

        if (userLogged) {
            try {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;            
            
            setUser(JSON.parse(userLogged))

            } catch (error) {
            console.error(error);
            }
        }
        setLoading(false);
        }

        loadUser();
    }, [])

    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}