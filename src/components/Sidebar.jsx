import { Link } from 'react-router-dom';
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/vite">Vite</Link></li>
            </ul>
        </div>
    );
}