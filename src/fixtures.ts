import { getIcon } from "./utils";
import { NavItem, User } from "./typings";

export const searchBox = {
    icon: getIcon("search") as JSX.Element,
    placeholder: "Search"
}

export const upperLinks: NavItem[] = [
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

export const lowerLinks: NavItem[] = [
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

export const user: User = {
    firstName: "olivia",
    lastName: "rhye",
    email: "olivia@untitledui.com"
};