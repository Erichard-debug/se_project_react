import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal.js";
import { getForcastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Switch, Route, useHistory } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import Profile from "../Profile/Profile";
import {
  deleteItem,
  getItems,
  addItem,
  addCardLike,
  removeCardLike,
} from "../../utils/Api";
import { signup, signin, checkToken, editProfile } from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          }
        })
        .then(() => {
          if (currentUser) {
            history.push("/profile");
          } else {
            history.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        {
          handleCloseModal();
        }
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  useEffect(() => {
    const handleClickClose = (evt) => {
      if (
        evt.target.classList.contains("item_modal") ||
        evt.target.classList.contains("modal")
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("click", handleClickClose);

    return () => {
      document.removeEventListener("click", handleClickClose);
    };
  }, []);

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

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenEditProfileModal = () => {
    setActiveModal("edit");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleSignUp = ({ name, avatar, email, password }) => {
    return signup({ name, avatar, email, password }).then((user) => {
      handleLogin({ email, password }).then(() => {
        handleCloseModal();
      });
    });
  };

  const handleLogin = ({ email, password }) => {
    return signin({ email, password }).then((res) => {
      const token = res.token;
      localStorage.setItem("jwt", res.token);
      return checkToken(token).then((data) => {
        const user = data;
        setLoggedIn(true);
        setCurrentUser(user);
        handleCloseModal();
        history.push("/profile");
      });
    });
  };

  const handleEditProfileSubmit = ({ name, avatar }) => {
    return editProfile({ name, avatar }).then((res) => {
      setCurrentUser(res);
      handleCloseModal();
    });
  };

  const handleLogout = () => {
    setCurrentUser("");
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  };

  const handleDeleteCard = (selectedCard) => {
    deleteItem(selectedCard)
      .then(() => {
        const newClothesList = clothingItems.filter((cards) => {
          return cards._id !== selectedCard._id;
        });
        setClothingItems(newClothesList);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLikeClick = ({ selectedCard, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(selectedCard, token)
          .then((updatedCard) => {
            console.log(updatedCard);
            setClothingItems((cards) => {
              return cards.map((card) => {
                console.log(card, selectedCard);
                return card._id === selectedCard._id ? updatedCard : card;
              });
            });
          })
          .catch((err) => console.log(err))
      : removeCardLike(selectedCard, token)
          .then((updatedCard) => {
            console.log(updatedCard);
            setClothingItems((cards) => {
              return cards.map((card) =>
                card._id === selectedCard._id ? updatedCard : card
              );
            });
          })
          .catch((err) => console.log(err));
  };

  const onAddItem = ({ name, imageUrl, weather }) => {
    addItem({ name, imageUrl, weather })
      .then((data) => {
        setClothingItems([data.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          onSignUp={handleOpenRegisterModal}
          onLogin={handleOpenLoginModal}
          loggedIn={loggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onCardLike={handleLikeClick}
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              clothingItems={clothingItems}
              handleCreateModal={handleCreateModal}
              onEditProfile={handleOpenEditProfileModal}
              onSelectCard={handleSelectedCard}
              onCardLike={handleLikeClick}
              loggedIn={loggedIn}
              onLogout={handleLogout}
            />
          </ProtectedRoute>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteCard={handleDeleteCard}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            buttonText={"Next"}
            onSignUp={handleSignUp}
            onAltButton={handleOpenLoginModal}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            buttonText={"Login"}
            onLogin={handleLogin}
            onAltButton={handleOpenRegisterModal}
          />
        )}
        {activeModal === "edit" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            handleEditProfile={handleEditProfileSubmit}
            buttonText={"Save changes"}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
