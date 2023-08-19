import "./Header.css";
import logo from "../../images/logo.svg";
import avatarLogo from "../../images/avatar-logo.svg";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__date">{currentDate},Spokane</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div className="header__avatar-name">Elliott Richard</div>
        <div>
          <img src={avatarLogo} alt="Avatar Logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;
