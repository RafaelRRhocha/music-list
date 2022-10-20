import type { FC } from 'react';
import Header from './Header';

interface ProfileEditProps {}

const ProfileEdit: FC<ProfileEditProps> = ({}) => {
  return (
    <div>
      <Header />
      <p>Tela de ProfileEdit</p>
    </div>
  );
}

export default ProfileEdit;