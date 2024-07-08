/* eslint-disable react/prop-types */
import { Message } from "./Message"
import { SongArtist } from "./SongArtist"
import { SongLyric } from "./SongLyric"

export const SongDetails = ({ busqueda, biografia, cancionLetra }) => {
    if (!cancionLetra || !biografia) return
    return (
        <>
            {cancionLetra.error || cancionLetra.err || cancionLetra.name === "AbortError" ? (<Message msg={`Error: no existe la canción "${busqueda.cancion}"`} bgColor="#dc3545"></Message>) : (<SongLyric titulo={busqueda.cancion} cancionLetra={cancionLetra.lyrics}></SongLyric>)}
            {biografia.artists ? <SongArtist artist={biografia.artists[0]}></SongArtist> : <Message msg={`Error: no existe el artista "${busqueda.artista}"`} bgColor="#dc3545"></Message>}
        </>
    )
}
