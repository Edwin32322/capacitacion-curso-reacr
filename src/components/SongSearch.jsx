import { useEffect, useState } from "react"
import { SongForm } from "./SongForm"
import { SongDetails } from "./SongDetails"
import { Loader } from "./Loader"
import { helpHttp } from "../helpers/helpHttp"

export const SongSearch = () => {
    const [busqueda, setBusqueda] = useState()
    const [biografia, setBiografia] = useState()
    const [cancionLetra, setCancionLetra] = useState()
    const [loading, setLoading] = useState()

    const handleSearch = (data) => {
        setBusqueda(data)
    }

    useEffect(() => {
        if (!busqueda) return
        const getData = async () => {
            const { artista, cancion } = busqueda
            let urlArtista = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista.toLowerCase()}`
            let urlCancion = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            setLoading(true)
            const [resArtista, resCancion] = await Promise.all(
                [
                    helpHttp().get(urlArtista),
                    helpHttp().get(urlCancion)
                ]
            )
            setBiografia(resArtista)
            setCancionLetra(resCancion)
            setLoading(false)
        }
        getData()
    }, [busqueda])
    return (
        <div>
            <h2>Buscador de Canciones</h2>
            <article className="grid-1-3">
                <SongForm handleSearch={handleSearch}></SongForm>
                {loading && <Loader></Loader>}
                {busqueda && !loading && (<SongDetails busqueda={busqueda} cancionLetra={cancionLetra} biografia={biografia}></SongDetails>)}
            </article>
        </div >
    )
}