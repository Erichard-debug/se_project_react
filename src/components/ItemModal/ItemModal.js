import "../ItemModal/ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  console.log("item modal");

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
            className="modal__item-delete-button"
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
