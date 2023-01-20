import Tab from "../components/general/Tab";
import BillingTab from "../components/settings/BillingTab";

const Settings = () => {
    const tabContent: { [k: string]: any } = {
        "my details": "my details tab",
        "profile": "profile tab",
        "password": "password tab",
        "team": "team tab",
        "plan": "plan tab",
        "billing": <BillingTab />,
        "notifications": "notifications tab",
        "integrations": "integrations tab",
        "API": "API tab",
    } 

    const active = Object.keys(tabContent)[0];

    return (
        <div className="space-y-5">
            <div>
                <h1 className="capitalize text-3xl font-medium text-gray-800">settings</h1>
                <span className="text-lg text-gray-500">Manage your team and preferences here.</span>
            </div>
            <div>
                <Tab tabContent={tabContent} active={active} />
            </div>
        </div>
    );
}
 
export default Settings;