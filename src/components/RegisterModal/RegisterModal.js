import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect } from "react";

const RegisterModal = ({ handleCloseModal, onSignUp, buttonText, isOpen }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [avatar, setAvatar] = useState("");
  const handlAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(avatar);
    onSignUp({ name, avatar, email, password });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <label>
        <p className="modal__input-title">Email</p>
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>

      <label>
        <p className="modal__input-title"> Password</p>
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>

      <label>
        <p className="modal__input-title">Name</p>
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="100"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>

      <label>
        <p className="modal__input-title">Avatar</p>
        <input
          className="modal__input"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handlAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
