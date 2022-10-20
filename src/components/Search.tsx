import type { FC } from 'react';
import { useState } from 'react';
import Header from './Header';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  const [artist, setArtist] = useState('');

  const getArtistName = (value: string) => setArtist(value);

  return (
    <div>
      <Header />
      <p>Tela de Search</p>
      <form>
        <input
          value={ artist }
          onChange={ ({ target: { value }}) => getArtistName(value)}
          type="text"
        />
        <button disabled={ artist.length < 2 } type="button">Pesquisar</button>
      </form>
    </div>
  );
}

export default Search;