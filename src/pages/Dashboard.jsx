function Dashboard() {
  const products = [
    { id: 1, name: "Headphones", img: "🎧" },
    { id: 2, name: "Smart Watch", img: "⌚" },
    { id: 3, name: "Keyboard", img: "⌨️" },
    { id: 4, name: "Mouse", img: "🖱️" },
    { id: 5, name: "Printer", img: "🖨️" },
    { id: 6, name: "iPad", img: "📱" },
    { id: 7, name: "Laptop", img: "💻" },
    { id: 8, name: "Camera", img: "📷" },
    { id: 9, name: "Speaker", img: "🔊" },
    { id: 10, name: "Monitor", img: "🖥️" },
    { id: 11, name: "Gaming Console", img: "🎮" },
    { id: 12, name: "Tablet", img: "📟" },
    { id: 13, name: "Webcam", img: "📹" },
    { id: 14, name: "Microphone", img: "🎤" }
  ];

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>Welcome Back 👋</h1>
          <p>Here's what's happening with your project today.</p>
        </div>
        <button className="btn-blue">+ Add New</button>
      </div>

      <div className="stats">
        <div className="stat-card">
          <p>Total Users</p>
          <h2>1,245</h2>
          <span className="green">+12.5%</span>
        </div>
        <div className="stat-card">
          <p>Total Orders</p>
          <h2>856</h2>
          <span className="green">+8.2%</span>
        </div>
        <div className="stat-card">
          <p>Revenue</p>
          <h2>$24,580</h2>
          <span className="green">+15.4%</span>
        </div>
        <div className="stat-card">
          <p>Total Products</p>
          <h2>{products.length}</h2> {/* Now shows 14 automatically */}
          <span className="green">+5.7%</span>
        </div>
      </div>

      <div className="grid-2">
        <div className="table-box">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>#ORD-1001</td><td>Saeed</td><td>💻 Laptop</td><td>$850</td><td><span className="badge green">Completed</span></td></tr>
              <tr><td>#ORD-1002</td><td>Ahmed</td><td>🎧 Headphones</td><td>$120</td><td><span className="badge yellow">Pending</span></td></tr>
              <tr><td>#ORD-1003</td><td>Ali</td><td>🖱️ Mouse</td><td>$40</td><td><span className="badge green">Completed</span></td></tr>
              <tr><td>#ORD-1004</td><td>Fatima</td><td>🖨️ Printer</td><td>$200</td><td><span className="badge yellow">Pending</span></td></tr>
              <tr><td>#ORD-1005</td><td>Usman</td><td>📱 iPad</td><td>$900</td><td><span className="badge green">Completed</span></td></tr>
              <tr><td>#ORD-1006</td><td>Ayesha</td><td>⌚ Smart Watch</td><td>$300</td><td><span className="badge green">Completed</span></td></tr>
              <tr><td>#ORD-1007</td><td>Hassan</td><td>⌨️ Keyboard</td><td>$80</td><td><span className="badge yellow">Pending</span></td></tr>
              <tr><td>#ORD-1008</td><td>Mariam</td><td>📷 Camera</td><td>$650</td><td><span className="badge green">Completed</span></td></tr>
              <tr><td>#ORD-1009</td><td>Bilal</td><td>🔊 Speaker</td><td>$150</td><td><span className="badge yellow">Pending</span></td></tr>
              <tr><td>#ORD-1010</td><td>Zainab</td><td>🖥️ Monitor</td><td>$400</td><td><span className="badge green">Completed</span></td></tr>
              <tr><td>#ORD-1011</td><td>Hamza</td><td>🎮 Gaming Console</td><td>$500</td><td><span className="badge yellow">Pending</span></td></tr>
              <tr><td>#ORD-1012</td><td>Sana</td><td>📟 Tablet</td><td>$350</td><td><span className="badge green">Completed</span></td></tr>
              <tr><td>#ORD-1013</td><td>Omar</td><td>📹 Webcam</td><td>$70</td><td><span className="badge green">Completed</span></td></tr>
              <tr><td>#ORD-1014</td><td>Khadija</td><td>🎤 Microphone</td><td>$110</td><td><span className="badge yellow">Pending</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className="table-box">
          <h2>Quick Overview</h2>
          <p>Sales Target: 78%</p>
          <div className="progress"><div style={{width: '78%'}}></div></div>
          <p>New Customers: 65%</p>
          <div className="progress"><div style={{width: '65%'}}></div></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard