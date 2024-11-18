import '../blocks/popup.css';
import closeIcon from '../images/close-icon.png';

export default function PopupWithForm(props) {
  return (
    <section className={`popup ${props.popupName} ${props.isOpen ? 'popup_popup_opened' : ''}`}>
      <div className={`popup__container ${props.popupName}__container`}>
      <img
        className="popup__close-icon"
        src={closeIcon}
        alt="Ícone de fechar."
        onClick={()=> props.onClose()}
      />
      <h2 className="popup__title">{props.title}</h2>
      <form name={`${props.popupName}`}
        className="popup__form"
        noValidate
      >
        {props.children}
      </form>
      </div>
    </section>
  )
}