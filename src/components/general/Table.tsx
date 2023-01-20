import React from "react";
import { getIcon } from "../../utils";
import { TableData } from "../../typings";

interface Props {
    tableData: {
        heading: string[],
        data: TableData[]
    }
}

const Table: React.FC<Props> = ({ tableData }) => {
    const headingCount = tableData.heading.length;

    return (
        <table className="w-full border rounded-3xl">
            <tr className="capitalize text-sm text-gray-600 font-medium">
                {/* displaying table cells based on items in heading */}
                {tableData.heading.map((heading, index) => {
                    if(index === 0) {
                        return (
                            <td key={index} className="flex items-center space-x-4 px-4 py-3">
                                <div className="w-6 h-6 border border-gray-400 rounded-md"></div>
                                <span>{heading}</span>
                            </td>
                        )
                    }
                    else if((index + 1) === headingCount) {
                        return <td key={index} className="px-2"></td>
                    }
                    else {
                        return <td key={index}>{heading}</td>
                    }
                })}
                
            </tr>
            {/* Diplay table data */}
            {tableData.data.map((data, index) => {
                //count number of user on plan
                let usersCount = data.users.length;
                return (
                    <tr key={index} className="bg-white border-t">
                        <td className="flex items-center space-x-4 px-4 py-8">
                            <div className="w-6 h-6 border border-gray-400 rounded-md"></div>
                            <span className="text-gray-900 font-medium">{data.invoice}</span>
                        </td>
                        <td className="text-sm text-gray-500 font-medium">USD ${data.amount}</td>
                        <td className="text-sm text-gray-500 font-medium">{data.date}</td>
                        <td>
                            <div className="flex items-center w-16 space-x-2 px-2 rounded-xl bg-[#ECFDF3] text-[#027A48]">
                                <i>{getIcon("tick")}</i>
                                <span className="capitalize text-sm font-medium">{data.status}</span>
                            </div>
                        </td>
                        <td>
                            {/* Display user avatars */}
                            <div className="flex items-center relative -space-x-2">
                                {data.users.map((user, index) => {
                                    //stop displaying after 5
                                    if(index > 5) return null;
                                    else if(index > 4) {
                                        //count and display remaining number users after 5
                                        return (
                                            <div className="w-7 h-7 bg-[#F9FAFB] border-2 border-white 
                                            rounded-2xl tex-gray-600 text-[15px] font-medium">
                                                +{usersCount - 5}
                                            </div>
                                        )
                                    } 
                                    else {
                                        //display user avatars
                                        return (
                                            <img 
                                                src={user} 
                                                alt="avatar" 
                                                className="w-7 h-7" 
                                                key={index}
                                            />
                                        )
                                    }
                                })}
                                
                            </div>
                        </td>
                        <td className="px-2">{data.icon}</td>
                    </tr>
                )
            })}
        </table>
    );
}
 
export default Table;