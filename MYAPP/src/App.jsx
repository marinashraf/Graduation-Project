import { useState ,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Sidebar from "./Components/Slid"; // أو اسمه Slid.jsx


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SystemHealthDashboard from './Components/SystemHealthDashboard'
import AdminDashboard from './Components/Dah'
// import Navbar from './Components/Navbar'
// import Sidebar from './Components/Sidebar'



// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//  const [darkMode, setDarkMode] = useState(false);

//  useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-theme");
//     } else {
//       document.body.classList.remove("dark-theme");
//     }
//   }, [darkMode]);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <>
      {/* <Navbar toggleSidebar={toggleSidebar} />
      

      <div className="app">
      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="content">
        <h1>Hello Marina!</h1>
        <p>This is the page content.</p>
      </div>
    </div> */}


    {/* <Navbar
        toggleSidebar={toggleSidebar}
       
        toggleTheme={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
       <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="content">
        <SystemHealthDashboard />
      </div>
    </>
  );
} */}

// export default App

// import React, { useState, useEffect } from "react";
// import Navbar from "./Components/Navbar";
// import Sidebar from "./Components/Sidebar";
// import SystemHealthDashboard from "./Components/SystemHealthDashboard";
// import "./App.css";
// !
// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-theme");
//     } else {
//       document.body.classList.remove("dark-theme");
//     }
//   }, [darkMode]);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <>
//       <Navbar
//         toggleSidebar={toggleSidebar}
//         toggleTheme={() => setDarkMode(!darkMode)}
//         darkMode={darkMode}
//       />
//       <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="main-content">
//         <SystemHealthDashboard />
//       </div>
//     </>
//   );
// }

// export default App;
// !
// import React, { useState } from "react";
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


// return (
// <div className={dark ? "dark-theme" : "light-theme"}>
// <div className="app-container">
// <Sidebar expand={expand} setExpand={setExpand} />


// <div className="content-wrapper">
// <Navbar dark={dark} setDark={setDark} />
// <Content />
// </div>
// </div>
// </div>


// );
   

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