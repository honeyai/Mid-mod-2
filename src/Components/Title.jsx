import React from 'react';

const Title = (props) => {
  return (
    <div>
      <p className={props.name}>{props.content}</p>
    </div>
  );
};

export default Title;