import React from 'react';
import Avatar from "@material-ui/core/Avatar";

const ProfileToken = (props) => {
  return (
    <div>
      <Avatar
          className={props.name}
          // alt={username} << used takes the first letter of username and uses that instead
          src={props.image}
        />
    </div>
  );
};

export default ProfileToken;