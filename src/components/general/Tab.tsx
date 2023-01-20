import React, { useState } from "react";

interface Props {
    tabContent: { [k: string]: any };
    active: string;
}
const Tab: React.FC<Props> = ({ tabContent, active}) => {
    const [activeTab, setActiveTab] = useState(active);
    const count = Object.keys(tabContent).length;

    function changeTab(name: string) {
        setActiveTab(name);
    }

    return (
        <div> 
            <ul className="flex xl:w-[75%] px-1 border border-gray-400 rounded-lg bg-[white] overflow-x-auto">
                {Object.keys(tabContent).map((tab, index) => (
                    <li 
                        key={tab}
                        className="py-2.5 px-4 cursor-pointer text-sm font-medium hover:bg-[#F9FAFB] capitalize"
                        onClick={() => changeTab(tab)}
                        style={{ 
                            background: activeTab === tab ? "#F9FAFB" : "", 
                            borderRight: (index + 1) === count ? "" : "1px solid #ddd" 
                        }}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            <div className="py-6">
                {tabContent[activeTab]}
            </div>
        </div>
    );
}
 
export default Tab;