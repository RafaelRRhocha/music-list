import type { FC } from 'react';
import Header from './Header';

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  return (
    <div>
      <Header />
      <p>Tela de Profile</p>
    </div>
  );
}

export default Profile;