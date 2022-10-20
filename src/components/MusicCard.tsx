import type { FC } from 'react';
import { saveFavorite } from '../utils/createFavorites';

interface MusicCardProps {
  previewUrl: string
  artistName: string
}

const MusicCard: FC<MusicCardProps> = ({ previewUrl, artistName }) => {
  return (
    <>
      <audio
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
      </audio>
      <label>
        Favorita
        <input type="checkbox" onClick={() => {
          saveFavorite({ previewUrl, artistName })
        }} />
      </label>
    </>
  );
}

export default MusicCard;