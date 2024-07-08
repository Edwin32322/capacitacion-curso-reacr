/* eslint-disable react/prop-types */
export const SongLyric = ({ titulo, cancionLetra }) => {
    return (
        <section>
            <h3>{titulo.toUpperCase()}</h3>
            <blockquote style={{ whiteSpace: "pre-wrap" }}>
                {cancionLetra}
            </blockquote>
        </section>
    )
}
