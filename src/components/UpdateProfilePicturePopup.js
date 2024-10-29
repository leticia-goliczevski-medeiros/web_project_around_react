import '../blocks/popup.css'
import closeIcon from '../images/close-icon.png'

export default function UpdateProfilePicturePopup() {
  return (
    <section className="popup update-profile-picture-popup">
      <div className="popup__container update-profile-picture-popup__container">
        <img
          className="popup__close-icon update-profile-picture-popup__close-icon"
          src={closeIcon}
          alt="Ícone de fechar."
        />
        <h2 className="popup__title">Alterar a foto do perfil</h2>
        <form
          className="popup__form update-profile-picture-popup__form"
          noValidate
        >
          <div className="popup__inputs">
            <input
              className="popup__input update-profile-picture-popup__input_picture"
              type="url"
              placeholder="Link da foto"
              required
            />
            <span
              className="popup__input-error update-profile-picture-popup__input_picture_error"
            ></span>
          </div>
          <button
            className="popup__submit-button update-profile-picture-popup__submit-button"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    </section>
  )
}