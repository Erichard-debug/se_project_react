import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect } from "react";

const LoginModal = ({ handleCloseModal, onLogin, buttonText, isOpen }) => {
  const [email, setEmail] = useState("");
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };


  return (
    <ModalWithForm
      title="Login"
      onClose={handleCloseModal}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <label className="modal__input-title">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailInput}
          required
        />
      </label>

      <label className="modal__input-title">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordInput}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
