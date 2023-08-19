// import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal.js";
import { getForcastWeather, parseWeatherData } from "../../utils/WeatherApi";

function App() {
  const weatherTemp = "85F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  console.log(temp);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title={"New Garment"} onClose={handleCloseModal}>
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
                />
                <label className="modal__weather-type">Hot</label>
              </div>
              <div className="modal__radio-option">
                <input
                  className="modal__radio-button"
                  type="radio"
                  id="warm"
                  value="warm"
                />
                <label className="modal__weather-type">Warm</label>
              </div>
              <div className="modal__radio-option">
                <input
                  className="modal__radio-button"
                  type="radio"
                  id="cold"
                  value="cold"
                />
                <label className="modal__weather-type">Cold</label>
              </div>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
