import '../blocks/image-popup.css'
import closeIcon from '../images/close-icon.png'

export default function ImagePopup() {
  return (
    <section className="popup image-popup">
      <div className="image-popup__container">
        <img
          className="popup__close-icon"
          src={closeIcon}
          alt="Ícone de fechar."
        />
        <img className="image-popup__image" src=" " />
        <h2 className="image-popup__title"></h2>
      </div>
    </section>
  )
}