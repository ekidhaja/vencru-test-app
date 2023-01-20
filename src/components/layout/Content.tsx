import { Routes, Route } from "react-router-dom";
import Home from "../../views/Home";
import Settings from "../../views/Settings";
import NotFound from "../../views/NotFound";
import Dashboard from "../../views/Dashboard";
import Projects from "../../views/Projects";
import Tasks from "../../views/Tasks";
import Reporting from "../../views/Reporting";
import Users from "../../views/Users";
import Support from "../../views/Support";

const Content = () => {
    return (
        <div className="h-full md:w-3/4 xl:w-4/5 px-8 py-10 bg-[#F9FAFB] overflow-auto">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/reporting" element={<Reporting />} />
                <Route path="/users" element={<Users />} />
                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
 
export default Content;