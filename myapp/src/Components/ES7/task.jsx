import React from 'react'

export default function task() {

    const Product= [ 
    { name: 'Laptop', price: 50000, category: 'Electronics',company:'HP', raing:4.5 },
    { name: 'Smartphone', price: 20000, category: 'Electronics', company:'Samsung', raing:4.0 },
    { name: 'Table', price: 10000, category: 'Furniture', company:'Nilkamal', raing:4.2 },
    { name: 'Chair', price: 5000, category: 'Furniture', company:'Royal Chair', raing:4.1 }
  ]

  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {Product.map((prod) => (
              <tr>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.category}</td>
                <td>{prod.company}</td>
                <td>{prod.raing}</td>
              </tr>
            ))}
          </tbody>
      </table>  

    </div>
  )
}
