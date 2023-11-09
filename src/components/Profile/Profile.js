import React from "react";
import SideBar from "../SideBar/SideBar.js";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ onSelectCard, handleCreateModal, clothingItems, onLogout}) {
  return (
    <div className="profile">
      <SideBar onLogout={onLogout}/>
      <ClothesSection
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
        clothingItems={clothingItems}
      />
    </div>
  );
}
export default Profile;
