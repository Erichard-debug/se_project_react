import "../ItemModal/ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
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
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <p className="modal__item-name">{selectedCard.name}</p>
        <div className="modal__item-weather">
          Weather Type:{selectedCard.weather}
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
