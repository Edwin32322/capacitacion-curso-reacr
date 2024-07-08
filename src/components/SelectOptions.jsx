/* eslint-disable react/prop-types */
import { useFetch } from "../hooks/useFetch"
import { Loader } from "./Loader"
import { Message } from "./Message"

export const SelectOptions = ({ title, url, handleChange }) => {
    const { data, error, isLoading } = useFetch(url)
    if (!data) return null
    if (error) {
        return <Message msg={`Error: ${error.status} : ${error.statusText}`} bgColor="#dc3545"></Message>
    }
    let id = `select-${title}`
    let label = title.charAt(0).toUpperCase() + title.slice(1)
    let options = data.response[title]
    console.log(options)
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id} onChange={handleChange}>
                <option value="">Elige un {title.toLowerCase()}</option>
                {data && options.map((el) => <option key={el} value={el}>{el}</option>)}
            </select>
            {isLoading && <Loader></Loader>}
        </>
    )
}
