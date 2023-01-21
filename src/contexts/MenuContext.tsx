import React, { createContext, useState } from "react";

type Props = {
    children?: React.ReactNode
};

export const MenuContext = createContext<any>(null);

const MenuContextProvider: React.FC<Props> = ({ children }) => {
    const [display, setDisplay] = useState(false);

    return (
        <MenuContext.Provider value={{ display, setDisplay }}>{ children }</MenuContext.Provider>
    )
}

export default MenuContextProvider;