import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  handleCloseModal,
  buttonText,
  handleEditProfile,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const handleNameChage = (evt) => {
    setName(evt.target.value);
  };
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEditProfile({ name, avatar });
  };

  useEffect(() => {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
  }, []);

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={handleCloseModal}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-content">
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
            onChange={handleNameChage}
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
            onChange={handleAvatarChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};
export default EditProfileModal;
