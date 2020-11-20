import React, { useState, createContext, useContext } from 'react'

const GlobalVarContext = createContext();

export const GlobalVar = (props) => {
    const [userinfo, setUserInfo] = useState()

    return (
        <GlobalVarContext.Provider value={{ user_info: [userinfo, setUserInfo], }}>
            {props.children}
        </GlobalVarContext.Provider>
    )
}

export const useGlobalVar = () => useContext(GlobalVarContext);

