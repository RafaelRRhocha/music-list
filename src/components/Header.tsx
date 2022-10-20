import Link from 'next/link';
import type { FC } from 'react';
import { getUser } from '../localStorage';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const user = getUser();

  return (
    <header>
      {!user ? <p>loading</p> : (
        <nav>
          <p>{`Olá! ${user}`}</p>
          <Link href="/search">
            <button type="button">Pesquisar</button>
          </Link>
          <Link href="/favorites">
            <button type="button">Favoritas</button>
          </Link>
          <Link href="/profile">
            <button type="button">Perfil</button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;