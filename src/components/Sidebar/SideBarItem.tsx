import { NavLink } from "react-router-dom";

export default function SidebarItem({ item, onClick }) {
    const Icon = item.icon;

    return (
        <NavLink
            to={item.path}
            end
            className={({ isActive }) =>
                `flex items-center relative px-4 py-3 transition-colors mx-4 rounded-3xl
         ${isActive ? "text-sky-500 bg-zinc-700" : "text-zinc-600 hover:text-zinc-400"}`
            }
        >
            {/* Icon */}
            <Icon className="w-5 h-5 mr-3" />

            {/* Label */}
            <span className="font-medium">{item.label}</span>
        </NavLink>
    );
}