// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
// import '../styles.css';

// const projectProgressData = [
//   { name: 'Week 1', uv: 400 },
//   { name: 'Week 2', uv: 300 },
//   { name: 'Week 3', uv: 500 },
//   { name: 'Week 4', uv: 200 },
//   { name: 'Week 5', uv: 278 },
//   { name: 'Week 6', uv: 189 },
// ];

// const teamProgressData = [
//   { name: 'Customer', value: 4283 },
//   { name: 'Additions', value: 297 },
// ];

// const performanceData = [
//   { name: '10', uv: 400 },
//   { name: '31', uv: 300 },
//   { name: '28', uv: 500 },
//   { name: '39', uv: 200 },
//   { name: '24', uv: 278 },
//   { name: '31', uv: 189 },
// ];

// const barChartData = [
//   { name: 'Mo', uv: 200, pv: 240 },
//   { name: 'Tu', uv: 300, pv: 139 },
//   { name: 'We', uv: 250, pv: 980 },
//   { name: 'Th', uv: 278, pv: 390 },
//   { name: 'Fr', uv: 189, pv: 480 },
//   { name: 'Sa', uv: 239, pv: 380 },
//   { name: 'Su', uv: 349, pv: 430 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// export default function EmployeeDashboardRedesign({ employee, onLogout }) {
//   return (
//     <div className="dashboard-wrapper">
//       <aside className="sidebar">
//         <div className="sidebar-header">
//           <div className="logo">🔧</div>
//           <h2>Employee Dashboard</h2>
//         </div>
//         <nav className="sidebar-nav">
//           <ul>
//             <li className="active">Dashboard</li>
//             <li>Operations</li>
//             <li>Projects</li>
//             <li>Reports</li>
//             <li>Settings</li>
//           </ul>
//         </nav>
//         <div className="sidebar-footer">
//           <button className="btn btn-primary">Teamland</button>
//           <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
//         </div>
//       </aside>
//       <div className="dashboard-main">
//         <header className="top-bar">
//           <h1>Employee Dashboard</h1>
//           <div className="top-bar-icons">
//             <button className="icon-button" title="Search">🔍</button>
//             <button className="icon-button" title="Notifications">🔔</button>
//             <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" className="user-avatar" />
//             <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User Avatar" className="user-avatar" />
//           </div>
//         </header>
//         <main className="dashboard-main-content">
//           <section className="top-cards">
//             <div className="card project-progress">
//               <h3>Project Progress</h3>
//               <p className="large-number">2374</p>
//               <p>Customer Satisfaction</p>
//               <button className="btn btn-toggle">Toggle</button>
//             </div>
//             <div className="card metrics">
//               <h3>Metrics</h3>
//               <p>Customer Satisfaction</p>
//               <button className="btn btn-toggle">Toggle</button>
//             </div>
//             <div className="card team-progress">
//               <h3>Team Progress</h3>
//               <PieChart width={150} height={150}>
//                 <Pie
//                   data={teamProgressData}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={60}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label
//                 >
//                   {teamProgressData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </div>
//             <div className="card calendar">
//               <h3>Calendar</h3>
//               <table className="calendar-table">
//                 <thead>
//                   <tr>
//                     <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
//                   <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>
//                   <tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
//                   <tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>
//                   <tr><td>28</td><td>29</td><td>30</td><td></td><td></td><td></td><td></td></tr>
//                 </tbody>
//               </table>
//             </div>
//           </section>
//           <section className="charts-section">
//             <div className="line-chart-container">
//               <h3>Project Progress</h3>
//               <ResponsiveContainer width="100%" height={200}>
//                 <LineChart data={projectProgressData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="uv" stroke="#2962ff" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//             <div className="bar-chart-container">
//               <h3>Weekly Activity</h3>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={barChartData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="uv" fill="#2962ff" />
//                   <Bar dataKey="pv" fill="#82ca9d" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </section>
//           <section className="bottom-section">
//             <div className="performance-summary">
//               <h3>Performance Summary</h3>
//               <p>Some performance details here...</p>
//             </div>
//             <div className="employee-status-table">
//               <h3>Performance Chart</h3>
//               <ResponsiveContainer width="100%" height={200}>
//                 <LineChart data={performanceData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="uv" stroke="#2962ff" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }
