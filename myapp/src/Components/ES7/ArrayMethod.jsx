import React from 'react'

export default function ArrayMethod() {

    // Array Methods
  const Student = [
    { name: 'user', email: 'user@gmail.com', phone: 1234567890, address: 'Mangalore' },
    { name: 'admin', email: 'admin@gmail.com', phone: 9876543210, address: 'Bangalore' },
    { name: 'guest', email: 'guest@gmail.com', phone: 1234567890, address: 'Delhi' },
    { name: 'tester', email: 'tester@gmail.com', phone: 1234567890, address: 'Hyderabad' }
  ]

  
  const num = [1,2,3,4,5,6,7,8,9,10]

  const Product= [ 
    { name: 'Laptop', price: 50000, category: 'Electronics',company:'HP', raing:4.5 },
    { name: 'Smartphone', price: 20000, category: 'Electronics', company:'Samsung', raing:4.0 },
    { name: 'Table', price: 10000, category: 'Furniture', company:'Nilkamal', raing:4.2 },
    { name: 'Chair', price: 5000, category: 'Furniture', company:'Royal Chair', raing:4.1 }
  ]

  return (
    <div>
      {num.map((data) => ( 
        <h3>{data}</h3>
      ))}

      {/* map method is used to iterate over an array of objects and return a new array of objects */}
        <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {Student.map((std) => (
            <tr>
              <td>{std.name}</td>
              <td>{std.email}</td>
              <td>{std.phone}</td>
              <td>{std.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
