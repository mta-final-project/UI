import React, {useState,useContext, ReactNode, FC} from "react";

type AuthProviderProps = {
    children: ReactNode | ReactNode[]
}

interface IAuthContext {
    user: IUser | null;
    setUser: (value: IUser | null) => void;
}

interface IUser {
    Name: string;
}

const AuthContext = React.createContext<IAuthContext>({ user: null, setUser: () => {} });

export const useAuth = (): IAuthContext => useContext(AuthContext);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
    <AuthContext.Provider value={{user,setUser}}>
        { children }
    </AuthContext.Provider>
);
};