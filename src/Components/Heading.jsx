import React from 'react';

const Heading = (props) => {
  return (
    <div>
      <p className={props.name}>{props.content}</p>
    </div>
  );
};

export default Heading;