import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal__type${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__header">{title}</h3>
        <form>{children}</form>
        <button className="modal__submit-button" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default ModalWithForm;
