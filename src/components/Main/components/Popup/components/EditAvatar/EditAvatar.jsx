export default function EditAvatar() {

  return (
    <form name='update-profile-picture-popup'
        className="popup__form"
        noValidate>
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
  
  )
}