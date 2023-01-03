import React, { useEffect, useState } from 'react'

function useDataFetching(url) {
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState()
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            setLoading(true)
            const todoData = await fetch(url)
            const resData = await todoData.json()
            console.log(resData)
            if(resData){
                setLoading(false)
                setData(resData)
            }
        } catch (e) {
            setLoading(false)
            setErrorMessage(e.message)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [url])


  return [loading, errorMessage, data]
}

export default useDataFetching