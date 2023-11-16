import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import "./ClothesSection.css";

function ClothesSection({
  onSelectCard,
  handleCreateModal,
  clothingItems,
  loggedIn,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentItems = clothingItems.filter((item) => {
    return item?.owner === currentUser?._id;
  });
  return (
    <div className="clothes__section">
      <div className="clothes__section-title-wrapper">
        <p className="clothes__section-title">Your items</p>
        <button
          type="submit"
          className="clothes__section-button"
          onClick={handleCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothing__section-cards">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item?._id ?? item?.id}
              item={item}
              onSelectCard={onSelectCard}
              loggedIn={loggedIn}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ClothesSection;
