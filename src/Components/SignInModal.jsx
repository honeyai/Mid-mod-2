import React from 'react';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import './Styles/signInModal.css' 

const SignInModal = () => {

  const [open, setOpen] = useState(false);

  const signUp = (event) => {

  }

  return (
    <div>
      <Button id="signInModal__button" onClick={() => setOpen(true)}>Sign Up</Button>
      <Modal
        className="signInModal__container"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="signInModal__text">
          <center>
            <header className="signInModal__header">
              <img className="logo" src={require("./assets/images/cameraLogoBlack.webp")} alt="black camera"/>
              <span className="logoName">Momentka</span>
            </header>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </center>
          <h2 id="simple-modal-title">Text in a modal</h2>
        </div>
      </Modal>
    </div>
  );
};

export default SignInModal;