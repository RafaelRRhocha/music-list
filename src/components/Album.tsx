import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import getMusics from '../utils/getMusics';
import Header from './Header';
import MusicCard from './MusicCard';

interface AlbumProps {}

const Album: FC<AlbumProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const musicsQuery = async () => {
      const query = await getMusics(id)
      const queryFiltered = query.filter(({ previewUrl }: any) => previewUrl)
      setMusics(queryFiltered)
    };
    musicsQuery();
  }, [id]);

  return (
    <>
      <Header />
      {musics.map(({trackId, artistName, previewUrl}) => (
        <div key={ trackId }>
          <MusicCard previewUrl={ previewUrl } artistName={ artistName } trackId={ trackId } favorite />
        </div>
      ))}
    </>
  );
}

export default Album;