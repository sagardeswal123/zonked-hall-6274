import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){

    const [signedUp, setSignedUp] = useState(false)
    const [stoken, setStoken] = useState("");

    const SignUp = (token)=>{
        setStoken(token);
        if(token){
            setSignedUp(true);
        }
    }

    return(
        <AuthContext.Provider value={{SignUp,stoken}}>
            {children}
        </AuthContext.Provider>
    )
}