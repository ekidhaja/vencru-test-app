import NavLinks from "./NavLinks";
import TextBox from "../general/TextBox";
import { User, NavItem } from "../../typings";
import { getIcon } from "../../utils";

const Sidebar = () => {
    const searchBox = {
        icon: getIcon("search") as JSX.Element,
        placeholder: "Search"
    }

    const upperLinks: NavItem[] = [
        {
            path: "/",
            icon: getIcon("home") as JSX.Element,
            text: "home",
        },
        {
            path: "/dashboard",
            icon: getIcon("dashboard") as JSX.Element,
            text: "dashboard",
            data: 10
        },
        {
            path: "/projects",
            icon: getIcon("projects") as JSX.Element,
            text: "projects",
        },
        {
            path: "/tasks",
            icon: getIcon("tasks") as JSX.Element,
            text: "tasks",
        },
        {
            path: "/reporting",
            icon: getIcon("reporting") as JSX.Element,
            text: "reporting",
        },
        {
            path: "/users",
            icon: getIcon("users") as JSX.Element,
            text: "users",
        },
    ];

    const lowerLinks: NavItem[] = [
        {
            path: "/support",
            icon: getIcon("support") as JSX.Element,
            text: "support",
        },
        {
            path: "/settings",
            icon: getIcon("settings") as JSX.Element,
            text: "settings",
        },
    ];

    const user: User = {
        firstName: "olivia",
        lastName: "rhye",
        email: "olivia@untitledui.com"
    };

    return (
        <div className="h-full md:w-1/4 xl:w-1/5 overflow-auto p-4 space-y-6"> 
            <div className="flex items-center space-x-1">
                <img src="./images/logomark.png" alt="logo" className="w-10 h-10" />
                <h1 className="text-xl font-medium">Untitled UI</h1>
            </div>
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
                <img src="./images/avatar.png" alt="avatar" className="w-[30px] h-[30px]" />
                <div>
                    <span className="block text-sm font-medium capitalize">{user.firstName} {user.lastName}</span>
                    <span className="block text-sm lowercase">{user.email}</span>
                </div>
                <button>{getIcon("logout")}</button>
            </div>
        </div>
    );
}
 
export default Sidebar;