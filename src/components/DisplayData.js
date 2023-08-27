import React, { useEffect, useState } from 'react'
import axios from 'axios'

 const DisplayData = () => {

  const[data , setData] = useState(null)

  useEffect(()=>{
      function fetch(){
          axios.get(" https://dummyjson.com/products").then((response)=>setData(response.data))
      }
      fetch()
  } , [])
  return (
    <div>
        <h1>Data Fetched from API</h1>
        <pre>
        {JSON.stringify(data, null, 2)}
        </pre>
    </div>
  )
}

export default DisplayData