import '../blocks/profile.css';
import editProfilePictureIcon from '../images/edit-profile-picture-icon.png';
import editProfileIcon from '../images/edit-button.png';
import addCardIcon from '../images/plus-sign.png';

export default function ProfileSection({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick}) {
    return (
        <section className="profile">
          <div className="profile__picture-container">
            <img
              className="profile__picture"
              src=""
              alt="Foto de perfil do usuário."
            />
            <img
              className="profile__picture-overlay-edit-icon"
              src={editProfilePictureIcon}
              alt="Ícone de editar foto de perfil."
              onClick={handleEditAvatarClick}
            />
          </div>
          <div className="profile__information">
            <div className="profile__name-and-icon">
              <h1 className="profile__name"></h1>
              <img
                className="profile__edit-icon"
                src={editProfileIcon}
                alt="Ícone de editar informações do perfil."
                onClick={handleEditProfileClick}
              />
            </div>
            <p className="profile__description"></p>
          </div>
          <button className="profile__add-button">
            <img
              className="profile__add-button-plus-sign"
              src={addCardIcon}
              alt="Ícone de adicionar postagem."
              onClick={handleAddPlaceClick}
            />
          </button>
        </section>
    )
}