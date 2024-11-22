import { useContext, useRef } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar(props) {
  const userContext = useContext(CurrentUserContext); 
  const { handleUpdateAvatar } = userContext;

  const { onClosePopup } = props
  const avatarRef = useRef()

  function handleSubmit(event) {
    event.preventDefault();
  
    handleUpdateAvatar(avatarRef.current.value);
    onClosePopup()
  }

  return (
    <form onSubmit={handleSubmit} name='update-profile-picture-popup'
        className="popup__form"
        noValidate>
      <div className="popup__inputs">
          <input
            ref={avatarRef}
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