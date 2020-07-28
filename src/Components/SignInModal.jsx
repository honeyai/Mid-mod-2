import React, { useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import './Styles/signInModal.css'
import { auth } from '../firebase';

const SignUpModal = () => {

  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => { //listening for user log
      if (authUser) {
        //if logged in
        setUser(authUser); //<<this uses cookie tracking thus it survives a refresh, keeping you logged in

      } else {
        //logged out
        setUser(null);
      }
    })

    return () => {
      //this will make sure the useEffect listener does fire over and over unnecessarily 
      //if detaches the listener before refiring
      unsubscribe();
    }

  }, [user, username]);//<<runs it once

  const signUp = event => {
    event.preventDefault();
    //these are got from the states on lines 11 n 12
    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username,
      })
    }).catch((error) => alert(error.message));

    setOpen(false); //close after submit
  }

  const signIn = event => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error.message))

    setOpenSignIn(false); //close after submit
    render(<ContentPage />)
  }

  return (
    <div>
      {user ? (
        console.log("this is user.displayName", user.displayName),
        <div className="newpage__wrapper">
          <ContentPage 
            element={
              <Button id="signUpModal__button" onClick={() => auth.signOut()}>Logout</Button>}
            userInfo={user.displayName}
            
          />
        </div>
      ) : (
          <div className="buttonsContainer">
            <Button id="signUpModal__button" onClick={() => setOpenSignIn(true)}>Sign In</Button>
            <Button id="signUpModal__button" onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
        )}
      <Modal
        className="signUpModal__container"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="signUpModal__text">
          <form action="" className="signUpModal__form">
            <center>
              <header className="signUpModal__header">
                <img className="logo" src={require("./assets/images/cameraLogoBlack.webp")} alt="black camera" />
                <span className="logoName">Momentka</span>
              </header>
            </center>

            <Input
              className="signUpInput"
              placeholder="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Input
              className="signUpInput"
              placeholder="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              className="signUpInput"
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button type="submit" id="signUpModal__button" onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>
      <Modal
        className="signUpModal__container"
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="signUpModal__text">
          <form action="" className="signUpModal__form">
            <center>
              <header className="signUpModal__header">
                <img className="logo" src={require("./assets/images/cameraLogoBlack.webp")} alt="black camera" />
                <span className="logoName">Momentka</span>
              </header>
            </center>
            <Input
              className="signUpInput"
              placeholder="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              className="signUpInput"
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit" id="signUpModal__button" onClick={signIn}>Sign In</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SignUpModal;


//========NOTES======
// if(authUser.displayName) {
          //*don't update the name
        //   console.log(authUser.displayName);
        //   setUser(authUser); //*<<this uses cookie tracking thus it survives a refresh, keeping you logged in
        // } else {
          //*just created a user? give firebase an attribute that hold their displayName
        //   return authUser.updateProfile({
        //     displayName: username,
        //   })
        // }