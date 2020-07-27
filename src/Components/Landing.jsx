import React from 'react';
import { useState } from 'react';
import Title from './Title';
import './Styles/landing.css'
import SignInModal from './SignUpModal';

const Landing = () => {

  const [activeUser, setUser] = useState("SunriseChef")

  return (
    <div>
      <div className="landingContainer">
        <Title 
          name="landing__landingWelcome" 
          content={
            <span>
              <SignInModal/>
            </span>
          }
        />
        {/* <Title 
          name="landing__landingWelcome" 
          content={
            <span>
              Welcome back, {activeUser}
            </span>
          }
        /> */}
      </div>
    </div>
  );
};

export default Landing;