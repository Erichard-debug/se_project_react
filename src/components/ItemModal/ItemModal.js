import "../ItemModal/ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const deleteButtonClassName = `modal__item-delete-button ${
    isOwn
      ? `modal__item-delete-button_visible`
      : `modal__item-delete-button_hidden`
  }`;

  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          className="modal__item-close-button"
          type="button"
          onClick={onClose}
        />
        <img
          className="modal__item-img"
          src={selectedCard?.imageUrl || selectedCard?.link}
          alt={selectedCard.name}
        />
        <div className="modal__item-description">
          <p className="modal__item-name">{selectedCard.name}</p>
          <div className="modal__item-weather">
            Weather Type:{selectedCard.weather}
          </div>
          <button
            className={deleteButtonClassName}
            type=" button"
            onClick={() => handleDeleteCard(selectedCard)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
