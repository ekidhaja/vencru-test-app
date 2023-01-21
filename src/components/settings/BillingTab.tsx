import { useState } from "react";
import TextBox from "../general/TextBox";
import CardDetails from "./CardDetails";
import { getIcon } from "../../utils";
import Table from "../general/Table";

const BillingTab = () => {
    const [checked, setChecked] = useState("visa");

    const emailBox = {
        icon: getIcon("email") as JSX.Element,
        placeholder: "Email"
    }

    const cardDetails = [
        {
            logo: getIcon("visa") as JSX.Element,
            desc: "Visa ending in 1234",
            expiry: "Expiry 06/2024",
            checked: getIcon("checked") as JSX.Element,
            unchecked: getIcon("unchecked") as JSX.Element,
            id: "visa"
        },
        {
            logo: getIcon("master") as JSX.Element,
            desc: "Master card ending in 1234",
            expiry: "Expiry 06/2024",
            checked: getIcon("checked") as JSX.Element,
            unchecked: getIcon("unchecked") as JSX.Element,
            id: "master"
        }
    ];

    const tableData = {
        heading: ["invoice", "amount", "date", "status", "Users on plan", ""],
        data: [
            {
                invoice: "Basic Plan - Dec 2022",
                amount: 10.00,
                date: "Dec 1, 2022",
                status: "paid",
                users: ["./images/avatar.png", "./images/avatar2.png", "./images/avatar3.png", "./images/avatar4.png", "./images/avatar5.png", "", ""],
                icon: getIcon("download") as JSX.Element
            },
            {
                invoice: "Basic Plan - Dec 2022",
                amount: 10.00,
                date: "Dec 1, 2022",
                status: "paid",
                users: ["./images/avatar.png", "./images/avatar2.png", "./images/avatar3.png", "./images/avatar4.png", "./images/avatar5.png", ""],
                icon: getIcon("download") as JSX.Element
            },
            {
                invoice: "Basic Plan - Dec 2022",
                amount: 10.00,
                date: "Dec 1, 2022",
                status: "paid",
                users: ["./images/avatar.png", "./images/avatar2.png", "./images/avatar3.png", "./images/avatar4.png", "./images/avatar5.png"],
                icon: getIcon("download") as JSX.Element
            },
            {
                invoice: "Basic Plan - Dec 2022",
                amount: 10.00,
                date: "Dec 1, 2022",
                status: "paid",
                users: ["./images/avatar.png", "./images/avatar2.png", "./images/avatar3.png", "./images/avatar4.png"],
                icon: getIcon("download") as JSX.Element
            },
            {
                invoice: "Basic Plan - Dec 2022",
                amount: 10.00,
                date: "Dec 1, 2022",
                status: "paid",
                users: ["./images/avatar.png", "./images/avatar2.png", "./images/avatar3.png"],
                icon: getIcon("download") as JSX.Element
            }
        ]
    }


    return (
        <div className="space-y-5">
            <div className="space-y-5">
                <h1 className="text-xl font-medium capitalize">payment method</h1>
                <span className="text-md text-gray-500">Update your billing details and address.</span>
            </div>
            <div className="space-y-5 md:space-y-0 md:flex md:space-x-10 border-t py-6">
                <div className="md:w-[25%]">
                    <h3 className="text-md font-medium capitalize">contact email</h3>
                    <span className="text-md text-gray-500">Where should invoices be sent?</span>
                </div>
                <div className="space-y-4 md:w-[60%]">
                    <div>
                        <div className="flex space-x-2">
                            <input type="radio" name="radio" checked />
                            <h4 className="text-gray-900 font-medium">Send to my email account</h4>
                        </div>
                        <h4 className="ml-6 text-gray-600">olivia@untitledui</h4>
                    </div>
                    <div>
                        <div className="flex space-x-2">
                            <input type="radio" name="radio" />
                            <h4 className="text-gray-900 font-medium">Send to an alternative email</h4>
                        </div>
                        <div className="ml-6 bg-white mt-2">
                            <TextBox icon={emailBox.icon} placeholder={emailBox.placeholder} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-5 md:space-y-0 md:flex md:space-x-10 border-t py-6">
                <div className="md:w-[25%]">
                    <h3 className="text-md font-medium capitalize">card details</h3>
                    <span className="text-md text-gray-500">Select default payment method.</span>
                </div>
                <div className=" md:w-[75%] space-y-6">
                    {cardDetails.map((details) => (
                        <div key={details.id} onClick={() => setChecked(details.id)}>
                            <CardDetails details={details} checked={checked} />
                        </div>
                    ))}
                    <button className="flex space-x-4 items-center">
                        <i>{getIcon("add")}</i> 
                        <span className="text-gray-600 font-medium">Add new payment method</span>
                    </button>
                </div>
            </div>
            <div className="space-y-8">
                <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-center mt-2">
                    <h1 className="text-xl text-gray-900 font-medium">Billing history</h1>
                    <button className="flex items-center space-x-2 border rounded-lg p-2.5 bg-white">
                        <i>{getIcon("download")}</i>
                        <span className="text-sm text-gray-600 font-medium">Download all</span>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <Table tableData={tableData} />
                </div>
            </div>
        </div>
    );
}
 
export default BillingTab;