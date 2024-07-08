/* eslint-disable react/prop-types */
export const SongArtist = ({ artist }) => {
    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt="" />
            <p>{artist.intBornYear}-{artist.intDiedYear || "presente"}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre}-{artist.strStyle}</p>
            <a href={`https:${artist.strWebsite}`} target="_black" rel="noreferrer">Sitio Web</a>
            <p>{artist.strBiographyEN}</p>
        </section>
    )
}
