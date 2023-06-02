import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App(){
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            baseURL: 'http://api.fakeshop-api.com',
            url: '/products/getAllProducts',
          })
            .then(({ data }) => {
              setData(data.products)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))
    }, [])
}

export default App