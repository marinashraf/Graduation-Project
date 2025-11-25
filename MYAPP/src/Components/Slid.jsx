import React from "react";
import { Home, BarChart2, CreditCard, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  ShieldAlert,
  Radio,
  Activity,
  FileText
} from "lucide-react";

export default function Sidebar({ expand, setExpand }) {
 const items = [
  { icon: <Home size={22} />, label: "Home", path: "/" },
  { icon: <Search size={22} />, label: "Device Discovery", path: "/Device" },
  { icon: <Bell size={22} />, label: "Alerts", path: "/Alerts" },
  { icon: <ShieldAlert size={22} />, label: "Network Malware", path: "/Network" },
  { icon: <Radio size={22} />, label: "GSM Module", path: "/GSM" },
  { icon: <Activity size={22} />, label: "System Health", path: "/System" },
  { icon: <Settings size={22} />, label: "Settings", path: "/settings" },
  { icon: <FileText size={22} />, label: "Logs", path: "/Logs" },
];

return (
<div
    className={`sidebar ${expand ? "sidebar-expanded" : "sidebar-collapsed"}`}
    onMouseEnter={() => setExpand(true)}
    onMouseLeave={() => setExpand(false)}
  >
    {items.map((item, i) => (
      <Link 
        to={item.path} 
        key={i} 
        className="sidebar-item"
      >
      <span className="icon">{item.icon}</span>
        {expand && <span className="sidebar-label">{item.label}</span>}
      </Link>
    ))}
  </div>
);
}