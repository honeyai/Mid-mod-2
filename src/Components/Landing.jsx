import React from 'react';
import { useState } from 'react';
import Title from './Title';
import './Styles/landing.css'

const Landing = () => {

  const [activeUser, setUser] = useState("SunriseChef")

  return (
    <div>
      <div className="landingContainer">
        <Title 
        name="heading__landingWelcome" 
        content={
          <span>
            Welcome back, {activeUser}
          </span>
        }
        />
      </div>
    </div>
  );
};

export default Landing;