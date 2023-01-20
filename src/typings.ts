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

export interface TableData {
    invoice: string;
    amount: number;
    date: string;
    status: string;
    users: string[];
    icon: JSX.Element
}