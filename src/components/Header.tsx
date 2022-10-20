import type { FC } from 'react';
import { getUser } from '../localStorage';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const user = getUser();

  return (
    <header>
      {!user ? <p>loading</p> : (
        <p>{`Olá! ${user}`}</p>
      )}
    </header>
  );
}

export default Header;