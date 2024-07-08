/* eslint-disable react/prop-types */
import { useForm } from "../hooks/useForm"
const initialForm = {
    artista: "",
    cancion: ""
}
export const SongForm = ({ handleSearch }) => {
    const { form, handleChange, handleReset } = useForm(initialForm)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.artista || !form.cancion) {
            alert("Datos requeridos")
            return
        }
        handleSearch(form)
        handleReset(initialForm)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artista" value={form.artista} placeholder="Nombre del artista..." onChange={handleChange} />
                <input type="text" name="cancion" value={form.cancion} placeholder="Nombre de la canción..." onChange={handleChange} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
