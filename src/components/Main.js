import ProfileSection from './ProfileSection.js';
import Gallery from './Gallery.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddCardPopup from './AddCardPopup.js';
import ImagePopup from './ImagePopup.js';
import PopupWithConfirmation from './PopupWithConfirmation.js';
import UpdateProfilePicturePopup from './UpdateProfilePicturePopup.js';
import PopupWithForm from './PopupWithForm.js';
import { useEffect } from 'react';

export default function Main() {
  

  
  
  return (
    <main className='content'>
      <ProfileSection handleEditAvatarClick={handleEditAvatarClick} handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick}/>
      <Gallery />
      <PopupWithForm popupName="edit-profile-popup" title="Editar perfil">
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
      </PopupWithForm>
      {/* <EditProfilePopup /> */}
      <PopupWithForm popupName="add-card-popup" title="Novo local">
      <div className="popup__inputs">
						<input
							className="popup__input add-card-popup__input_title"
							type="text"
							placeholder="Título"
							minLength="2"
							maxLength="30"
							required
						/>
						<span
							className="popup__input-error add-card-popup__input_title_error"
						></span>
						<input
							className="popup__input add-card-popup__input_link"
							type="url"
							placeholder="Link de imagem"
							required
						/>
						<span
							className="popup__input-error add-card-popup__input_link_error"
						></span>
					</div>
					<button
						className="popup__submit-button add-card-popup__submit-button"
						type="submit"
					>
						Criar
					</button>
      </PopupWithForm>
      {/* <AddCardPopup /> */}
      <ImagePopup />
      <PopupWithForm popupName="popup-with-confirmation" title="Tem certeza?">
        <button
					className="popup__submit-button popup-with-confirmation__submit-button"
					type="submit"
				>
					Sim
				</button>
      </PopupWithForm>
      {/* <PopupWithConfirmation /> */}
      <PopupWithForm popupName="update-profile-picture-popup" title="Alterar a foto do perfil">
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
      </PopupWithForm>
      {/* <UpdateProfilePicturePopup /> */}
    </main>
  )
}