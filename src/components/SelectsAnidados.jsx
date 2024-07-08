import { useState } from "react"
import { SelectOptions } from "./SelectOptions"
export const SelectsAnidados = () => {
    const [state, setState] = useState("")
    const [town, setTown] = useState("")
    const [suburb, setSuburb] = useState("")
    // const TOKEN = "f691a9f8-79bd-4746-85ee-85a5298027d9"
    return (
        <div>
            <h2>Select Anidados</h2>
            <h3>México</h3>
            <SelectOptions title="estado" url={`https://api.copomex.com/query/get_estados?token=pruebas`} handleChange={(e) => {
                setState(e.target.value)
                setTown("")
                setSuburb("")
            }} ></SelectOptions>
            {state && <SelectOptions title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas`} handleChange={(e) => { setTown(e.target.value) }} ></SelectOptions>}
            {town && <SelectOptions title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=pruebas`} handleChange={(e) => { setSuburb(e.target.value) }} ></SelectOptions>}
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    )
}
