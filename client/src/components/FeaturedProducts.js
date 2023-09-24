import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const FeaturedProducts = () => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState("")

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true)

          const res = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*&[filters][type][$eq]=featured", {
            headers: { Authorization: "Bearer " + process.env.REACT_APP_STRAPI_API_TOKEN }
          })
          setData(res.data.data)

        } catch(err) {
          setError(err)
        }
        console.log(data)
        setLoading(false)
      }
      fetchData()
    }, [])

  return (
    <div className='w-full py-14 px-20 md:pr-10 md:pl-20 bg-background'>
        <div className='flex items-center justify-center mb-12'>
            <h1 className='capitalize font-bold text-2xl'>Featured Products</h1>
        </div>
        
        <div className='grid md:grid-cols-4 grid-cols-2 justify-center gap-4'> {/* flex-wrap creates grid; horizontal layout without it */}
          { error 
              ? "Something went wrong"
              : loading 
                ? "Loading..." 
                : data.map(item => ( <Card item={item} key={item.id}/> ))
          }
        </div>
    </div>
  )
}

export default FeaturedProducts