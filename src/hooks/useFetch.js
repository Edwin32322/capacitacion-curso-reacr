import { useEffect, useState } from 'react'
export const useFetch = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    useEffect(() => {
        const getDataApi = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw { status: response.status, statusText: response.statusText, url: url }
                }
                const json = await response.json()
                setData(json)
            } catch (error) {
                setError(error)
            }
        }
        getDataApi()
        setIsLoading(true)
    }, [url])
    return {
        data,
        isLoading,
        error
    }
}
