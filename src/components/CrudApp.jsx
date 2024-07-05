import { useState } from 'react';
import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'
const productos = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 19.99,
    },
    {
        id: 2,
        nombre: "Pantalones",
        precio: 29.99,
    },
    {
        id: 3,
        nombre: "Reloj",
        precio: 99.99,
    },
    {
        id: 4,
        nombre: "Gorra",
        precio: 14.99,
    },
    {
        id: 5,
        nombre: "Zapatillas",
        precio: 49.99,
    }
];

export const CrudApp = () => {
    const [products, setProducts] = useState(productos)
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
    return (
        <div>
            <h2>CrudApp</h2>
            <CrudForm createData={createData} updateData={updateData} productToEdit={productToEdit} setProductToEdit={setProductToEdit}></CrudForm>
            <CrudTable products={products} setProductToEdit={setProductToEdit} deleteData={deleteData}></CrudTable>
        </div>
    )
}
