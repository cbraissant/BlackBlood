import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";

/* Pages */
import Home from "./pages/Home";
import Sensors from "./pages/Sensors";
import Info from "./pages/Info";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Parent route with layout */}
                <Route element={<AppLayout />}>
                    {/* Nested routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="sensors" element={<Sensors />} />
                    <Route path="info" element={<Info />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}