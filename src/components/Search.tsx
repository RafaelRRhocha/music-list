import type { FC } from 'react';
import Header from './Header';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div>
      <Header />
      <p>Tela de Search</p>
    </div>
  );
}

export default Search;