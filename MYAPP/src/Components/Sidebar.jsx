import React from "react";
import "../assets/Sidebar.css";
import { FaHome, FaDesktop, FaExclamationTriangle, FaVirus, FaSignal, FaHeartbeat, FaCog, FaFileAlt } from "react-icons/fa";




// export default function Sidebar({ isOpen, onClose }) {
//   const menuItems = [
//     { name: "Home Dashboard", icon: "🏠" },
//     { name: "Device Discovery", icon: "🖥️" },
//     { name: "Alerts For Unknown", icon: "⚠️" },
//     { name: "Network Malware Detection", icon: "🦠" },
//     { name: "GSM Module", icon: "📶" },
//     { name: "System Health", icon: "❤️" },
//     { name: "Setting", icon: "⚙️" },
//     { name: "Logs", icon: "📄" },
//   ];

//   return (
//     <>
    
//       {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <button className="close-btn" onClick={onClose}>×</button>
//         <h3>Menu</h3>
//         <ul>
//           {menuItems.map((item, idx) => (
//             <li key={idx}>
//               <span className="icon">{item.icon}</span>
//               <span className="item-text">{item.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }




export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <div
      className="sidebar"
      style={{
        left: sidebarOpen ? "0" : "-290px",
        transition: "0.3s"
      }}
    >
      <span className="close-btn" onClick={toggleSidebar}>
        <box-icon name="x" size="30px"></box-icon>
      </span>

      <h3>Menu</h3>
      <ul>
        <li><box-icon name="home"></box-icon> Home Dashboard</li>
        <li><box-icon name="search-alt"></box-icon> Device Discovery</li>
        <li><box-icon name="bell"></box-icon> Alerts For Unknown</li>
        <li><box-icon name="bug"></box-icon> Network Malware</li>
        <li><box-icon name="signal-5"></box-icon> GSM Module</li>
        <li><box-icon name="heartbeat"></box-icon> System Health</li>
        <li><box-icon name="cog"></box-icon> Settings</li>
        <li><box-icon name="file"></box-icon> Logs</li>
      </ul>
    </div>
  );
}
