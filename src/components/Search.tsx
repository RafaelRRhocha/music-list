import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import searchAlbumsAPI from '../utils/searchAlbum';
import Header from './Header';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(true);
  const [albuns, setAlbuns] = useState([]);

  const getArtistName = (value: string) => setArtist(value);

  const getAlbum = async () => {
    setArtist('');
    const searchQuery = await searchAlbumsAPI(artist);
    setAlbuns(searchQuery);
    setLoading(true);
  }

  return (
    <>
      <Header />
      {!loading ? <p>Loading...</p> : (
        <form>
          <input
            value={ artist }
            onChange={ ({ target: { value }}) => getArtistName(value)}
            type="text"
          />
          <button
            disabled={ artist.length < 2 }
            type="button"
            onClick={ () => getAlbum() }
          >
            Pesquisar
          </button>
        </form>
      )}
      {albuns.length > 1 ? (
        <div>
          <p>{`Retornando albuns de: ${artist}`}</p>
          <div>
            {albuns.map(({
              artistId,
              artistName,
              collectionId,
              collectionName,
              collectionPrice,
              artworkUrl100,
              releaseDate,
              trackCount,
            }: any) => (
              <Link key={ collectionId } href={`/album/${collectionId}`}>
                <div >
                    <p>{artistName}</p>
                    <p>{collectionId}</p>
                    <p>{collectionName}</p>
                    <p>{collectionPrice}</p>
                    <p>{artworkUrl100}</p>
                    <p>{releaseDate}</p>
                    <p>{trackCount}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p>nenhum album foi encontrado</p>
      )}
    </>
  );
}

export default Search;