import React from 'react';

const Landing = () => {

  

  return (
    <div>
      <Heading 
      name="landingWelcome" 
      content={
        <span>
          Welcome, {this.activeUser}
        </span>
      }
      />
    </div>
  );
};

export default Landing;