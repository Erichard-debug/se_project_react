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
      <div className="modal__form-content">
        <label>
          <p className="modal__input-title"> Email</p>
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

        <label>
          <p className="modal__input-title">Password</p>
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
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
