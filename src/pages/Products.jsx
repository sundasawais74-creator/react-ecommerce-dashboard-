function Products() {
  const products = [
    {id: 1, name: "Headphones", img: "🎧"},
    {id: 2, name: "Smart Watch", img: "⌚"},
    {id: 3, name: "Keyboard", img: "⌨️"},
    {id: 4, name: "Mouse", img: "🖱️"},      
    {id: 5, name: "Printer", img: "🖨️"},     
    {id: 6, name: "iPad", img: "📱"},        
  ]

  return (
    <div className="container">
      <div className="header">
        <div><h1>Products</h1><p>Manage and monitor all your products.</p></div>
        <button className="btn-blue">+ Add Product</button>
      </div>
      <div className="stats">
        <div className="stat-card"><p>Total Products</p><h2>320</h2></div>
        <div className="stat-card"><p>In Stock</p><h2>245</h2></div>
        <div className="stat-card"><p>Low Stock</p><h2>42</h2></div>
        <div className="stat-card"><p>Out of Stock</p><h2>33</h2></div>
      </div>
      <div className="product-grid">
        {products.map(p => 
          <div key={p.id} className="product-card">
            <div className="product-img">{p.img}</div>
            <h3>{p.name}</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products