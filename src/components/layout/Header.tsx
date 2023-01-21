import React, { useContext } from "react";
import { getIcon } from "../../utils";
import { MenuContext } from "../../contexts/MenuContext";

const Header: React.FC = () => {
    const { display, setDisplay } = useContext(MenuContext);

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1 p-4 md:p-0">
                <img src="./images/logomark.png" alt="logo" className="w-10 h-10" />
                <h1 className="text-xl font-medium">Untitled UI</h1>
            </div>
            <i 
                className="mr-5 cursor-pointer"
                onClick={() => setDisplay(!display)}
            >
                {getIcon("hamburger")}
            </i>
        </div>
    );
}
 
export default Header;