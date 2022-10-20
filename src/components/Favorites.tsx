import { FC, useEffect, useState } from 'react';
import { readFavorite } from '../utils/createFavorites';
import Header from './Header';
import MusicCard from './MusicCard';

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = ({}) => {
  const [getFavorite, setGetFavorite] = useState<any[]>([]);

  useEffect(() => {
    const favorites = readFavorite();
    setGetFavorite(favorites);
  }, []);

  return (
    <>
      <Header />
      {getFavorite.length <= 0 ? <p>Nenhuma música favoritada</p> : (
        getFavorite.map(({ previewUrl, artistName }, i) => (
          <div key={ i }>
            <MusicCard previewUrl={ previewUrl } artistName={ artistName } favorite={ false } />
          </div>
        ))
      )}
    </>
  );
}

export default Favorites;