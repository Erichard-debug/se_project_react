import "./Header.css";

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
          <img src={require("../../images/logo.svg").default} alt="Logo" />
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
          <img
            src={require("../../images/avatar-logo.svg").default}
            alt="Avatar Logo"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
