import React, {useState} from 'react'
import axios from 'axios'

export default function () {
    const [data, setData] = useState([])

    const handlefetch=()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=>{
           // console.log(response)
            //console.log(response.data)
            setData(response.data.products)  
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
        <button onClick={handlefetch}>Fetch Data</button>
        {data.map((item)=>{
            return(
                <div>
                    <h3>ID: {item.id}</h3>
                    <h4>Category: {item.category}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Brand: {item.brand}</p>
                    <img src={item.thumbnail} alt={item.title} width={200}/>
                </div>
            )
        })}
    </div>
  )
}
