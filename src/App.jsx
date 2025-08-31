import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Vite from "./pages/Vite";


function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <div className="app">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/vite" element={<Vite />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
