import React from "react";
import { getIcon } from "../../utils";

interface Props {
    display: boolean;
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ display, setDisplay }) => {
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