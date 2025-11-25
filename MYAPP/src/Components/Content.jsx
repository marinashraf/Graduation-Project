// import React from "react";
import React, { useEffect, useState } from "react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import "./SystemHealthDashboard.css"; 
import "../assets/SystemHealthDashboard.css"
import { PieChart, Pie, Cell } from "recharts";


export default function Content() {
  const [cpuTrend, setCpuTrend] = useState(generateTrend());
  const [ramTrend, setRamTrend] = useState(generateTrend());
  const [netTrend, setNetTrend] = useState(generateTrend());

  const [cpu, setCpu] = useState(27);
  const [ram, setRam] = useState(46);
  const [temperature, setTemperature] = useState(52);
  const [storageUsedPct, setStorageUsedPct] = useState(62);
  const [upload, setUpload] = useState(12);
  const [download, setDownload] = useState(48);
  const [uptimeSeconds, setUptimeSeconds] = useState(3600 * 5 + 32 * 60);

  const [restarting, setRestarting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
return (
<>
  {/* الصف الأول – 3 كروت */}
  <div className="grid-3">

    <div className="card1">
      <h2>System Health Dashboard</h2>
      <div className="card-gradient">
        <Card title="CPU Usage">
          <div className="metric-value">{cpu}%</div>
          <ProgressBar percent={cpu} />
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={80}>
              <LineChart data={cpuTrend}>
                <Line type="monotone" dataKey="value" stroke="#ffffff" dot={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide domain={[0, 100]} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>

    <div className="card1" style={{ textAlign:"center" }}>
      <Card title="Uptime">
        <div className="metric-value">{formatUptime(uptimeSeconds)}</div>
        <button className="restart-btn" onClick={() => setShowConfirm(true)} disabled={restarting}>
          {restarting ? "Restarting..." : "Restart System"}
        </button>
      </Card>
    </div>

    <div className="card1" style={{ height:"250px" }}>
      <Card title="Temperature">
        <div className="metric-value">{temperature}°C</div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={[
                  { name: "Used", value: temperature - 20 },
                  { name: "Remaining", value: 60 - (temperature - 20) }
                ]}
                innerRadius={30}
                outerRadius={50}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                <Cell fill="#ff4c4c" />
                <Cell fill="#444" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>

  </div>

  {/* الصف الثاني – 3 كروت */}
  <div className="grid-3" style={{ marginTop: "20px" }}>

    <div className="card1" style={{ height: "250px" }}>
      <Card title="Storage Usage">
        <div className="metric-value">{storageUsedPct}%</div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={[
                  { name: "Used", value: storageUsedPct },
                  { name: "Remaining", value: 100 - storageUsedPct }
                ]}
                innerRadius={30}
                outerRadius={50}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                <Cell fill="#ff8c00" />
                <Cell fill="#444" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>

    <div className="card1" style={{ height: "250px" }}>
      <Card title="Network">
        <div className="metric-value">Up: {upload} Mbps / Down: {download} Mbps</div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={80}>
            <LineChart data={netTrend}>
              <Line type="monotone" dataKey="value" stroke="#ff6347" dot={false} />
              <XAxis dataKey="name" hide />
              <YAxis hide domain={[0, 1000]} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>

    {/* المودال */}
    {showConfirm && (
      <div className="modal">
        <div className="modal-content">
          <h3>Confirm Restart</h3>
          <p>Are you sure you want to restart the system?</p>
          <div className="modal-actions">
            <button onClick={() => setShowConfirm(false)}>Cancel</button>
            <button onClick={handleRestart}>Restart</button>
          </div>
        </div>
      </div>
    )}

  </div>

  {/* الصف الثالث – كارت واحد (RAM) */}
  <div className="card1" style={{ height:"250px", marginTop:"2rem" }}>
    <Card title="RAM Usage">
      <div className="metric-value">{ram}%</div>
      <ProgressBar percent={ram} />
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={80}>
          <AreaChart data={ramTrend}>
            <Area type="monotone" dataKey="value" stroke="#ff8c00" fill="#ff8c00aa" />
            <XAxis dataKey="name" hide />
            <YAxis hide domain={[0, 100]} />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  </div>
</>

);
}
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
function generateTrend() {
  return Array.from({ length: 12 }, (_, i) => ({ name: i, value: rand(30, 70) })); // قيم متوسطة عشان يظهر المنحنى
}
function rand(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m}m ${s}s`;
}

function ProgressBar({ percent = 0, color = "#ff4500" }) {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percent}%`, backgroundColor: color }}></div>
    </div>
  );
}