import React from 'react';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import './Styles/signUpModal.css'

const SignUpModal = () => {

  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (event) => {

  }
  // const setUser = (event) => {

  // }
  // const signUp = (event) => {

  // }
  // const signUp = (event) => {

  // }

  return (
    <div>
      <Button id="signUpModal__button" onClick={() => setOpen(true)}>Sign Up</Button>
      <Modal
        className="signUpModal__container"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="signUpModal__text">
          <form action="">
            <center>
              <header className="signUpModal__header">
                <img className="logo" src={require("./assets/images/cameraLogoBlack.webp")} alt="black camera" />
                <span className="logoName">Momentka</span>
              </header>
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
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
            <Button id="signUpModal__button" onClick={() => setOpen(true)}>Sign Up</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SignUpModal;