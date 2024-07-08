import { useEffect, useState } from 'react'
export const useFetch = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        const getDataApi = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw { status: response.status || "00", statusText: response.statusText || "Ocurrió un error", url: url }
                }
                const json = await response.json()
                if (!signal.aborted) {
                    setData(json)
                    setError(null)
                }
            } catch (error) {
                if (!signal.aborted) {
                    setData(null)
                    setError(error)
                }
            } finally {
                if (!signal.aborted) {
                    setIsLoading(false)
                }
            }
        }
        getDataApi()
        return () => {
            abortController.abort()
        }
    }, [url])
    return {
        data,
        isLoading,
        error
    }
}
