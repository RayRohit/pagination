import { useEffect, useState } from 'react'
import Paginate from './Utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'


export default function UseFetch() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const getProducts = async () => {
        const res = await fetch(url)
        const data = await res.json()
        // Paginate(data)
        setData(Paginate(data))
        setLoading(false)
    }
    useEffect(()=>{
        getProducts()
    },[])
    return {loading,data}
}
