import "../ItemCard/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__item">
      <h2 className="card__name">{item.name}</h2>
      <img
        src={item?.imageUrl || item?.link}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};
export default ItemCard;
