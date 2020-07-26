import React from 'react';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import { Button } from '@material-ui/core';
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
          <h2 id="simple-modal-title">Text in a modal</h2>
        </div>
      </Modal>
    </div>
  );
};

export default SignInModal;