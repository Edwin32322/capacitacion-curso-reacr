import { useEffect, useState } from "react"
import { helpHttp } from "../helpers/helpHttp"
import { CrudForm } from "./CrudForm"
import { CrudTable } from "./CrudTable"
export const CrudApi = () => {
    let api = helpHttp()
    let url = "http://localhost:3000/productos"
    const [products, setProducts] = useState([])
    const [productToEdit, setProductToEdit] = useState(null)
    const createData = (form) => {
        const payload = {
            ...form,
            id: products.length + 1
        }
        setProducts([
            ...products,
            payload
        ]
        )
    }
    const updateData = (payload) => {
        let newData = products.map(producto => producto.id === payload.id ? payload : producto)
        setProducts(newData)
    }
    const deleteData = (id) => {
        setProducts(products.filter(producto => producto.id !== id))
    }
    useEffect(() => {
        //JSON WEB SERVER
        api.get(url).then(res => setProducts(res))
    }, [])
    return (
        <div>
            <h2>Crud API</h2>
            <CrudForm createData={createData} updateData={updateData} productToEdit={productToEdit} setProductToEdit={setProductToEdit}></CrudForm>
            <CrudTable products={products} setProductToEdit={setProductToEdit} deleteData={deleteData}></CrudTable>
        </div>
    )
}
