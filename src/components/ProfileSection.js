import '../blocks/profile.css';
import editProfilePictureIcon from '../images/edit-profile-picture-icon.png';
import editProfileIcon from '../images/edit-button.png';
import addCardIcon from '../images/plus-sign.png';

export default function ProfileSection({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, userName, userDescription, userAvatar}) {
    return (
        <section className="profile">
          <div className="profile__picture-container" onClick={handleEditAvatarClick}>
            <img
              className="profile__picture"
              src={userAvatar}
              alt="Foto de perfil do usuário."
            />
            <img
              className="profile__picture-overlay-edit-icon"
              src={editProfilePictureIcon}
              alt="Ícone de editar foto de perfil."
            />
          </div>
          <div className="profile__information">
            <div className="profile__name-and-icon">
              <h1 className="profile__name">{userName}</h1>
              <img
                className="profile__edit-icon"
                src={editProfileIcon}
                alt="Ícone de editar informações do perfil."
                onClick={handleEditProfileClick}
              />
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button className="profile__add-button" onClick={handleAddPlaceClick}>
            <img
              className="profile__add-button-plus-sign"
              src={addCardIcon}
              alt="Ícone de adicionar postagem."
            />
          </button>
        </section>
    )
}