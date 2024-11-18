import '../blocks/image-popup.css'
import closeIcon from '../images/close-icon.png'

export default function ImagePopup({card, isOpen, onClose}) {
  return (
    <section className={`popup image-popup ${isOpen? 'popup_popup_opened' : ''}`}>
      <div className="image-popup__container">
        <img
          className="popup__close-icon"
          src={closeIcon}
          alt="Ícone de fechar."
          onClick={onClose}
        />
        <img className="image-popup__image" src={card.link} alt={card.name} />
        <h2 className="image-popup__title">{card.name}</h2>
      </div>
    </section>
  )
}