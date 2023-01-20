import React from "react";

interface Props {
    icon?: JSX.Element;
    placeholder: string;
}
 
const SearchBox: React.FC<Props> = ({ icon, placeholder }) => {
    return (
        <div className="flex items-center border border-gray-300 rounded-lg py-2 px-3 space-x-2">
            {icon && (<i>{icon}</i>)}
            <input 
                type="text"
                className="outline-none w-[80%] h-[28px] bg-transparent"
                placeholder={placeholder}
            />
        </div>
    );
}
 
export default SearchBox;