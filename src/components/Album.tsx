import { useRouter } from 'next/router';
import type { FC } from 'react';
import Header from './Header';

interface AlbumProps {}

const Album: FC<AlbumProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query

  return (
    <div>
      <Header />
      <p>{`Tela de Album ${id}`}</p>
    </div>
  );
}

export default Album;