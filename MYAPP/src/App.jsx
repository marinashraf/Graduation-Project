import { useState ,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SystemHealthDashboard from './Components/SystemHealthDashboard'
import AdminDashboard from './Components/Dah'
import Sidebar from "./Components/Slid";
import Navbar from "./Components/Nav";
import Content from "./Components/Content";
import "./Components/styles.css";
import HomePage from "./Components/HomePage";
import Device from "./Components/Device-Discovery";
import Alerts from "./Components/Alerts";
import Network from "./Components/Network";

export default function App() {
const [dark, setDark] = useState(false);
const [expand, setExpand] = useState(false);


   

 return (
    <BrowserRouter>
      <div className={dark ? "dark-theme" : "light-theme"}>
        <div className="app-container">
          <Sidebar expand={expand} setExpand={setExpand} />

          <div className="content-wrapper">
            <Navbar dark={dark} setDark={setDark} />
             {/* <Content /> */}
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/Device" element={<Device />} />
              <Route path="/Alerts" element={<Alerts />} />
              <Route path="/Network" element={<Network />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
