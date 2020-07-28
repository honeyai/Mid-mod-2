import React from 'react';
import Title from './Title';
import './Styles/landing.css'
import SignInModal from './SignInModal';
// import { Router } from 'react-router-dom';

const Landing = () => {

  // const [activeUser, setUser] = useState("")

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