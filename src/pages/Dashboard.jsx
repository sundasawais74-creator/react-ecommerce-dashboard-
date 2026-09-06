function Dashboard() {
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
        <div className="stat-card"><p>Total Users</p><h2>1,245</h2><span className="green">+12.5%</span></div>
        <div className="stat-card"><p>Total Orders</p><h2>856</h2><span className="green">+8.2%</span></div>
        <div className="stat-card"><p>Revenue</p><h2>$24,580</h2><span className="green">+15.4%</span></div>
        <div className="stat-card"><p>Products</p><h2>6</h2><span className="green">+5.7%</span></div>  
      </div>

      <div className="grid-2">
        <div className="table-box">
          <h2>Recent Orders</h2>
          <table>
            <thead><tr><th>Order ID</th><th>Customer</th><th>Product</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody>
              <tr>
                <td>#ORD-1001</td><td>Saeed</td><td>💻 Laptop</td><td>$850</td>
                <td><span className="badge green">Completed</span></td>
              </tr>
              <tr>
                <td>#ORD-1002</td><td>Ahmed</td><td>🎧 Headphones</td><td>$120</td>
                <td><span className="badge yellow">Pending</span></td>
              </tr>
              <tr>
                <td>#ORD-1003</td><td>Ali</td><td>🖱️ Mouse</td><td>$40</td>  
                <td><span className="badge green">Completed</span></td>
              </tr>
              <tr>
                <td>#ORD-1004</td><td>Fatima</td><td>🖨️ Printer</td><td>$200</td>  
                <td><span className="badge yellow">Pending</span></td>
              </tr>
              <tr>
                <td>#ORD-1005</td><td>Usman</td><td>📱 iPad</td><td>$900</td>  
                <td><span className="badge green">Completed</span></td>
              </tr>
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