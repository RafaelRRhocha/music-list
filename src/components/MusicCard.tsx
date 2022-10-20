import type { FC } from 'react';
import { removeFavorite, saveFavorite } from '../utils/createFavorites';

interface MusicCardProps {
  previewUrl: string
  artistName: string
  favorite: boolean
  trackId?: number
}

const MusicCard: FC<MusicCardProps> = ({ previewUrl, artistName, favorite, trackId }) => {
  return (
    <>
      <p>{artistName}</p>
      <audio
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
      </audio>
      {favorite ? (
        <label>
          Favorita
          <input type="checkbox" onClick={() => {
            saveFavorite({ previewUrl, artistName, trackId })
          }} />
        </label>
      ) : (
        <button type="button" onClick={() => removeFavorite(trackId)}>Excluir Favorita</button>
      )}
    </>
  );
}

export default MusicCard;