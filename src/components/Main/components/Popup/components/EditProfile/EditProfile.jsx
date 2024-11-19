export default function EditProfile() {

  return (
    <form name='edit-profile-popup'
        className="popup__form"
        noValidate>
      <div className="popup__inputs">
          <input
            className="popup__input edit-profile-popup__input_name"
            type="text"
            placeholder="Nome"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className="popup__input-error edit-profile-popup__input_name_error"
          ></span>
          <input
            className="popup__input edit-profile-popup__input_about"
            type="text"
            placeholder="Sobre mim"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="popup__input-error edit-profile-popup__input_about_error"
          ></span>
          <button
            className="popup__submit-button edit-profile-popup__submit-button"
            type="submit"
          >
            Salvar
          </button>
        </div>
    </form>
  
  )
}