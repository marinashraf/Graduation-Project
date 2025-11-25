import React from "react";
import { Moon, Sun ,Bell, Search } from "lucide-react";


// export default function Navbar({ dark, setDark }) {
// return (
// <div className="navbar">
// <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>ELITE</h1>
// <button className="icon-btn" title="Notifications">
//           <i className="fa-solid fa-bell"></i>
//         </button>
//  <button className="btn-logout">Logout</button>
// <button className="theme-btn" onClick={() => setDark(!dark)}>
// {dark ? <Sun /> : <Moon />}
// </button>
// </div>
// );
// }





export default function Navbar({ dark, user ,setDark}) {
  return (
    <nav className={`navbar ${dark ? "dark-theme" : ""}`}>
      {/* مربع البحث */}
      <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>ELITE</h1>
      <div className="navbar-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* الأيقونات واسم المستخدم */}
      <div className="navbar-icons">
        {/* جرس التنبيهات */}
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        {/* تسجيل الدخول أو اسم المستخدم */}
        {user ? (
          <div className="navbar-user">
            <span className="user-name">{user.name}</span>
            <img src={user.avatar} alt="avatar" className="user-avatar" />
          </div>
        ) : (
          <button className="login-btn">Login</button>
        
        )}
          <button className="theme-btn" onClick={() => setDark(!dark)}>
 {dark ? <Sun /> : <Moon />}
 </button>
      </div>
    </nav>
  );
}
