import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "../../typings";

interface Props {
    navLinks: NavItem[];
}

const NavLinks: React.FC<Props> = ({ navLinks}) => {
    return (
        <div className="space-y-2">
        {navLinks.map((navLink, index) => (
            <NavLink 
                to={navLink.path} 
                key={index} 
                className="flex justify-between items-center p-2 hover:bg-[#F9FAFB]"
                style={({ isActive }) => ({ background: isActive ? "#F9FAFB" : "" })}
            >
                <div className="flex items-center space-x-4">
                    <i className="w-[17px] h-[17px]">{navLink.icon}</i>
                    <div className="text-lg text-gray-700 font-medium capitalize">{navLink.text}</div>
                </div>
                {navLink.data && ( <div className="py-1 px-3 text-gray-600 font-medium bg-[#F2F4F7] rounded-full">{navLink.data}</div>)}
            </NavLink>
        ))}
        </div>
    );
}
 
export default NavLinks;