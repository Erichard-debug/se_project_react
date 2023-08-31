import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const [weather, setWeatherType] = useState("");

  const handleWeatherType = (e) => {
    setWeatherType(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setWeatherType("");
      setUrl("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weather });
  };

  return (
    <ModalWithForm
      title={"New Garment"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-content">
        <label>
          <p className="modal__input-title">Name</p>
          <input
            className="modal__input"
            placeholder="Name"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          <p className="modal__input-title">Image</p>
          <input
            className="modal__input"
            placeholder="Image"
            type="url"
            name="link"
            minLength="1"
            maxLength="30"
            value={link}
            onChange={handleUrlChange}
          />
        </label>
        <p className="modal__weather-section">Select the Weather Type:</p>
        <div className="modal__radio-options">
          <div className="modal__radio-option">
            <input
              className="modal__radio-button"
              type="radio"
              id="hot"
              value="hot"
              onChange={handleWeatherType}
            />
            <label className="modal__weather-type">Hot</label>
          </div>
          <div className="modal__radio-option">
            <input
              className="modal__radio-button"
              type="radio"
              id="warm"
              value="warm"
              onChange={handleWeatherType}
            />
            <label className="modal__weather-type">Warm</label>
          </div>
          <div className="modal__radio-option">
            <input
              className="modal__radio-button"
              type="radio"
              id="cold"
              value="cold"
              onChange={handleWeatherType}
            />
            <label className="modal__weather-type">Cold</label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
