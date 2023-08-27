import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import 'regenerator-runtime/runtime';

 const DisplayData = () => {

  const[data , setData] = useState(null)
  const[error , setError] = useState(null)

  useEffect(()=>{
      function fetchData(){
        
            axios.get(" https://dummyjson.com/products").then((response)=>{
            setData(response.data)
            setError(null)
            
        }).catch(err=>{
           setError("An error occurred: ")
           setData(null)
           console.log(err)
        }
        )
        }
        fetchData()
      }
   , [])
  return (
    <div>
        <h1>Data Fetched from API</h1>
       {data != null && <pre>
        {JSON.stringify(data, null, 2)}
        </pre>
      }

      {
        error != null && <h3>{error}</h3>
      }
    </div>
  )
}

export default DisplayData