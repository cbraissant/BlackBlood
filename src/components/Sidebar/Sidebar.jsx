import { pages } from '../../config/pages';
import SideBarItem from './SideBarItem';

export default function Sidebar() {
    return (
        <div className="w-72 border-r border-zinc-600 flex flex-col">
            {pages.map((item) => (
                <SideBarItem key={item.id} item={item} />
            ))}
        </div>
    );
}