import React from 'react';
// يفترض أنك ستستخدم ملف CSS أو Tailwind/Styled Components
import "../assets/Dash.css"

// محاكاة لمكون الأيقونة
const Icon = ({ name }) => <span className={`icon-${name}`}>{/* أيقونة فعلية */}</span>;

// بيانات وهمية لإدارة المسؤولين
const adminData = [
  { id: 1, name: "Fraution", role: "Active", status: "Active", options: "delete" },
  { id: 2, name: "FesInls", role: "Ustlule", status: "Suspended", options: "delete" },
  { id: 3, name: "Morution", role: "Active", status: "Active", options: "delete" },
  { id: 4, name: "Ulewelon", role: "Auspensed", status: "Active", options: "delete" },
  { id: 5, name: "Hain Devicer", role: "Active", status: "Suspended", options: "delete" },
  { id: 6, name: "SusInls", role: "Ustlule", status: "Suspended", options: "delete" },
  { id: 7, name: "Tmplelior", role: "Active", status: "Suspended", options: "delete" },
  { id: 8, name: "Mliswints", role: "Suspensed", status: "Suspended", options: "delete" },
];

// 1. مكون الشريط الجانبي (Sidebar)
const Sidebar = ({ activeItem, onNavItemClick }) => {
  const navItems = [
    { name: "Alerts", icon: "alerts", isSelected: false },
    { name: "Actions", icon: "actions", isSelected: false },
    { name: "Admin", icon: "admin", isSelected: true }, // افتراضًا أن هذه هي الصفحة النشطة
    { name: "Admin", icon: "admin", isSelected: false },
    { name: "Security", icon: "security", isSelected: false },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <Icon name="shield" />
        <span>ELITE Network Security</span>
      </div>
      <nav className="nav-list">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${item.isSelected ? 'active' : ''}`}
            onClick={() => onNavItemClick(item.name)}
          >
            <Icon name={item.icon} />
            {item.name}
          </div>
        ))}
      </nav>
      <div className="logout">
        Logout
      </div>
    </div>
  );
};

// 2. مكون جدول إدارة المسؤولين (Admin Management Table)
const AdminTable = ({ data }) => {
  const getStatusClass = (status) => {
    if (status === 'Active') return 'status-active';
    if (status === 'Suspended') return 'status-suspended';
    return '';
  };

  return (
    <div className="admin-table-container">
      <h3>Admin Management</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((admin) => (
            <tr key={admin.id}>
              <td>
                <span className="dot active-dot"></span>
                {admin.name}
              </td>
              <td>
                <span className={`dot ${admin.role === 'Active' ? 'active-dot' : 'role-dot'}`}></span>
                {admin.role}
              </td>
              <td className={getStatusClass(admin.status)}>
                <span className={`dot ${getStatusClass(admin.status)}`}></span>
                {admin.status}
              </td>
              <td>
                <Icon name="delete" /> {/* أيقونة الحذف */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 3. مكون البطاقات الجانبية (Stat Cards)
const StatCards = ({ totalAdmins, lastLoginInfo, is2faEnabled }) => {
  return (
    <div className="stat-cards">
      <div className="card">
        <h4>Total Admins</h4>
        <div className="value">{totalAdmins}</div>
      </div>
      <div className="card">
        <h4>Last Login Info</h4>
        <div className="info-text">{lastLoginInfo}</div>
      </div>
      <div className="card two-fa">
        <h4>2FA Enabled</h4>
        <div className="toggle-switch">
          <span className="toggle-label">{is2faEnabled ? 'ON' : 'OFF'}</span>
          {/* محاكاة زر التبديل */}
          <input
            type="checkbox"
            id="2fa-toggle"
            checked={is2faEnabled}
            readOnly // لجعلها للقراءة فقط في هذا المثال
          />
          <label htmlFor="2fa-toggle" className="slider"></label>
        </div>
      </div>
    </div>
  );
};

// 4. المكون الرئيسي (Dashboard)
const AdminDashboard = () => {
  const [activeNav, setActiveNav] = React.useState('Admin');

  const handleNavItemClick = (itemName) => {
    setActiveNav(itemName);
  };

  return (
    <div className="dashboard-container">
      <Sidebar activeItem={activeNav} onNavItemClick={handleNavItemClick} />
      <div className="main-content">
        <header className="dashboard-header">
          <h2>ELITE Network Security Dashboard</h2>
          <div className="header-actions">
            <button className="btn primary">Add Admin</button>
            <button className="btn secondary">Edit Roles</button>
          </div>
        </header>

        <div className="content-layout">
          <div className="main-area">
            <AdminTable data={adminData} />
          </div>
          <aside className="sidebar-stats">
            <StatCards
              totalAdmins={15}
              lastLoginInfo="John Doe - 10/26/2023"
              is2faEnabled={true}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;