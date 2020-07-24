import React from 'react';
import { useState } from 'react';
import Heading from './Heading';
import './Styles/landing.css'

const Landing = () => {

  const [activeUser, setUser] = useState("SunriseChef")

  return (
    <div>
      <div className="landingContainer">
        <Heading 
        name="landingWelcome" 
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