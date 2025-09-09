import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="flex h-screen py-4 bg-zinc-900 text-green-50">
            <Sidebar />
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
}