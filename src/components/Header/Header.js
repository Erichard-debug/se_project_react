import "./Header.css";
import logo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ onCreateModal, onSignUp, onLogin, loggedIn }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  const currentAvatar = currentUser?.avatar !== "" ? true : false;
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__date">{currentDate},Spokane</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {loggedIn ? (
          <>
            <div>
              <button
                className="header__button"
                type="text"
                onClick={onCreateModal}
              >
                + Add Clothes
              </button>
            </div>
            <Link to="/profile">
              <div className="header__avatar-name">{currentUser?.name}</div>
            </Link>
            {currentAvatar ? (
              <div>
                <img
                  className="header__avatar"
                  src={currentUser?.avatar}
                  alt="Avatar icon"
                />
              </div>
            ) : (
              <p className="header__avatar-default">
                {currentUser?.name[0].toUpperCase()}
              </p>
            )}
          </>
        ) : (
          <>
            <button
              className="header__register"
              type="button"
              onClick={onSignUp}
            >
              Sign Up
            </button>
            <button className="header__login" type="button" onClick={onLogin}>
              Login
            </button>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
