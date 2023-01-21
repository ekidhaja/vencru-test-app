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
            <div 
                className="-mx-4 md:-mx-10 lg:mx-0 bg-white border 
                lg:w-full xl:w-[75%] lg:rounded-xl overflow-x-auto"
            >
                <table className="cursor-pointer w-[700px] lg:w-full">
                    <thead>
                        <tr>
                        {Object.keys(tabContent).map((tab, index) => (
                            <td 
                                key={tab}
                                className="py-2 px-2 md:py-2.5 md:px-2.5 xl:px-4 
                                text-sm font-medium hover:bg-[#F9FAFB] capitalize"
                                onClick={() => changeTab(tab)}
                                style={{ 
                                    background: activeTab === tab ? "#F9FAFB" : "", 
                                    borderRight: (index + 1) === count ? "" : "1px solid #ddd"
                                }}
                            >
                                {tab}
                            </td>
                        ))}
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="py-6">
                {tabContent[activeTab]}
            </div>
        </div>
    );
}
 
export default Tab;