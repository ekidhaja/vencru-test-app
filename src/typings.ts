export interface User {
    firstName: string;
    lastName: string;
    email: string;
}
export interface NavItem {
    icon: string | JSX.Element;
    text: string;
    path: string;
    data?: number
}