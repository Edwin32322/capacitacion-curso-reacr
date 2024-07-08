import { useForm } from "../hooks/useForm"
import { Loader } from "./Loader"
import { Message } from "./Message"
const initialForm = {
    nombre: "",
    email: "",
    asunto: "",
    descripcion: ""
}
const validationsForm = (form) => {
    let errors = {}
    let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    let regexDescripcion = /^.{1,255}$/
    if (!form.nombre.trim()) {
        errors.nombre = "El campo 'Nombre' es requerido"
    } else if (!regexNombre.test(form.nombre.trim())) {
        errors.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco"
    }
    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto"
    }
    if (!form.asunto.trim()) {
        errors.asunto = "El campo 'Asunto' es requerido"
    }
    if (!form.descripcion.trim()) {
        errors.descripcion = "El campo 'Descripcion' es requerido"
    } else if (!regexDescripcion.test(form.descripcion.trim())) {
        errors.descripcion = "El campo 'Descripcion' no debe exceder los 255 caracteres"
    }
    return errors
}
let style = {
    fontWeight: "Bold",
    backgroundColor: "#dc3545",
    padding: "0.5rem",
    color: "white"
}
export const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm)
    return (
        <div>
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Ingrese su nombre" onBlur={handleBlur} onChange={handleChange} value={form.nombre} required />
                {errors.nombre && <p style={style}>{errors.nombre}</p>}
                <input type="email" name="email" placeholder="Ingrese su email" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                {errors.email && <p style={style}>{errors.email}</p>}
                <input type="text" name="asunto" placeholder="Asunto a tratar" onBlur={handleBlur} onChange={handleChange} value={form.asunto} required />
                {errors.asunto && <p style={style}>{errors.asunto}</p>}
                <textarea name="descripcion" cols="50" rows="5" placeholder="Descripcion..." onBlur={handleBlur} onChange={handleChange} value={form.descripcion} required />
                {errors.descripcion && <p style={style}>{errors.descripcion}</p>}
                <input type="submit" value="Enviar" />
                {loading && <Loader></Loader>}
                {response && <Message bgColor="#198574" msg="Los datos han sido enviados"></Message>}
            </form>
        </div>
    )
}
