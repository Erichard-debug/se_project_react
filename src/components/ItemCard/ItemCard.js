import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import likeButton from "../../images/likeButton.svg";
import likeButtonActive from "../../images/likeButton-active.svg";
import "../ItemCard/ItemCard.css";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item?.likes.some((_id) => _id === currentUser?._id);
  const cardLikeButtonClass = `card__like-btn ${
    loggedIn ? "card__like-btn_visible" : "card__like-btn_hidden"
  }`;
  const cardLikeButtonImg = `${isLiked ? likeButtonActive : likeButton}`;

  const handleLikeClick = () => {
    onCardLike({ selectedCard: item, isLiked });
  };

  return (
    <div className="card__item">
      <h2 className="card__name">{item.name}</h2>
      <img
        src={item?.imageUrl || item?.link}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <img
        src={cardLikeButtonImg}
        className={cardLikeButtonClass}
        onClick={handleLikeClick}
        alt="like button"
      />
    </div>
  );
};
export default ItemCard;
