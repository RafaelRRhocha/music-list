import type { FC } from 'react';
import Header from './Header';

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = ({}) => {
  return (
    <div>
      <Header />
      <p>Tela de Favorites</p>
    </div>
  );
}

export default Favorites;