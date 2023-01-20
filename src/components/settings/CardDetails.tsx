//import React, { useState } from "react";

interface Props {
    details: {
        id: string,
        logo: JSX.Element,
        desc: string,
        expiry: string,
        checked: JSX.Element,
        unchecked: JSX.Element
    };
    checked: string;
}
const CardDetails: React.FC<Props> = ({ details, checked }) => {
    //const [checked, setChecked] = useState(false);

    return (
        <div 
            className="flex justify-between p-4 border rounded-xl cursor-pointer"
            style={{ background: checked === details.id ? "" : "white" }}
        >
            <div className="flex space-x-4">
                <i>{details.logo}</i>
                <div style={{ color: checked === details.id ? "#9E77ED" : "#667085"}}>
                    <span className="font-medium block">{details.desc}</span>
                    <span className="">{details.expiry}</span>
                    <div className="mt-2 space-x-4">
                        <button className="font-medium">Set as default</button>
                        <button className="text-[#9E77ED] font-medium">Edit</button>
                    </div>
                </div>
            </div>
            <div> 
                {checked === details.id ? (<div>{details.checked}</div>) : (<div>{details.unchecked}</div>)}
            </div>
        </div>
    );
}
 
export default CardDetails;