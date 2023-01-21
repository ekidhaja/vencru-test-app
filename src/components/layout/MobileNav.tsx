import React from "react";
import { searchBox, upperLinks, lowerLinks, user } from "../../fixtures";
import TextBox from "../general/TextBox";
import NavLinks from "./NavLinks";
import { getIcon } from "../../utils";

interface Props {
    display: boolean;
}

const MobileNav: React.FC<Props> = ({ display }) => {
    return (
        <div className={`${display ? 'block' : 'hidden'} h-full pb-24 overflow-y-auto p-4 space-y-6`}>
            <div>
                <TextBox icon={searchBox.icon} placeholder={searchBox.placeholder} />
            </div>
            <div>
                <NavLinks navLinks={upperLinks} />
            </div>
            <div>
                <NavLinks navLinks={lowerLinks} />
            </div>
            <div className="bg-[#F9FAFB] rounded-xl space-y-4 p-4">
                <h4 className="text-md font-medium">New features available!</h4>
                <span className="text-sm text-gray-400">Check out the new dashboard view. Pages now load faster.</span>
                <img src="./images/person.png" alt="person" />
                <div className="space-x-4 font-medium">
                    <button className="text-gray-500">Dismiss</button>
                    <button className="text-blue-700">What's new?</button>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-4 border-t border-t-gray-300 pt-6">
                <img src="./images/avatar.png" alt="avatar" className="w-[48px] h-[48px]" />
                <div>
                    <span className="block text-md font-medium capitalize">{user.firstName} {user.lastName}</span>
                    <span className="block text-md lowercase">{user.email}</span>
                </div>
                <button>{getIcon("logout")}</button>
            </div>
        </div>
    );
}
 
export default MobileNav;