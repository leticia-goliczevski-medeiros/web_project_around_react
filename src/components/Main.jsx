import ProfileSection from './ProfileSection.jsx';
import Gallery from './Gallery.jsx';
import ImagePopup from './ImagePopup.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import {api} from '../utils/api.js'
import { useState, useEffect } from 'react';

export default function Main({onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onClose,onCardClick, selectedCard, isImagePopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen}) {
  
  const [userName, setUserName] = useState("") 
  const [userDescription, setUserDescription] = useState("") 
  const [userAvatar, setUserAvatar] = useState("")
  const [cards, setCards] = useState([])

  useEffect(()=> {
    api
      .getUser()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((userObject) => {
        setUserName(userObject.name)
        setUserDescription(userObject.about)
        setUserAvatar(userObject.avatar)
      }).catch((error) => {
        console.log(error);
      });

      api
      .getInitialCards()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((cardsList) => {
        console.log(cardsList);
        setCards(cardsList);
      })
      .catch((error) => {
        console.log(error);
        setCards([]);
      });
  }, [])

  return (
    <main className='content'>
      <ProfileSection handleEditAvatarClick={onEditAvatarClick} handleEditProfileClick={onEditProfileClick} handleAddPlaceClick={onAddPlaceClick} userName={userName} userDescription={userDescription} userAvatar={userAvatar}/>

      <Gallery cards={cards} onCardClick={onCardClick}/>

      <PopupWithForm popupName="edit-profile-popup" title="Editar perfil" isOpen={isEditProfilePopupOpen} onClose={onClose}>
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

      <PopupWithForm popupName="add-card-popup" title="Novo local" isOpen={isAddPlacePopupOpen} onClose={onClose}>
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

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={onClose}/>

      <PopupWithForm popupName="popup-with-confirmation" title="Tem certeza?">
        <button
					className="popup__submit-button popup-with-confirmation__submit-button"
					type="submit"
				>
					Sim
				</button>
      </PopupWithForm>
      
      <PopupWithForm popupName="update-profile-picture-popup" title="Alterar a foto do perfil" isOpen={isEditAvatarPopupOpen} onClose={onClose}>
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
    </main>
  )
}