import React from 'react';
import Title from './Title';
import ProfileToken from './profileToken';

const UserSelectScreen = () => {
  return (
    <div>
      <Title name="userSelectLanding" content="Sign in"/>
      <ProfileToken/>
    </div>
  );
};

export default UserSelectScreen;