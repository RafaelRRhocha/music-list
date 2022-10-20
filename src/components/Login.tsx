import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import { setUserLocal } from '../localStorage';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const [user, setUser] = useState('');

  const setUserName = (value: string) => {
    setUser(value)
    setUserLocal(value)
  };

  return (
    <form>
      <input
        type="text"
        value={ user }
        onChange={ ({ target: { value }}) => setUserName(value) }
      />
      <Link href="/search">
        <button type="button">Entrar</button>
      </Link>
    </form>
  );
}

export default Login;