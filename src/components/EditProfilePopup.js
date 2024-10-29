import '../blocks/popup.css';
import closeIcon from '../images/close-icon.png';

export default function EditProfilePopup() {
	return (
		<section className="popup edit-profile-popup">
			<div className="popup__container edit-profile-popup__container">
				<img
					className="popup__close-icon edit-profile-popup__close-icon"
					src={closeIcon}
					alt="Ícone de fechar."
				/>
				<h2 className="popup__title">Editar perfil</h2>
				<form className="popup__form edit-profile-popup__form" noValidate>
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
					</div>
					<button
						className="popup__submit-button edit-profile-popup__submit-button"
						type="submit"
					>
						Salvar
					</button>
				</form>
			</div>
    </section>
	)
}