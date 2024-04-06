'use client'
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({children}:{
    children: React.ReactNode;
}){
    let [userid, setUserid] = useState("")

    return(
        <AppContext.Provider value={{
            userid,
            setUserid
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}