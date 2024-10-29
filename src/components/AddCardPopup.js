import '../blocks/popup.css';
import closeIcon from '../images/close-icon.png';

export default function AddCardPopup() {
  return (
		<section className="popup add-card-popup">
			<div className="popup__container add-card-popup__container">
				<img
					className="popup__close-icon add-card-popup__close-icon"
					src={closeIcon}
					alt="Ícone de fechar."
				/>
				<h2 className="popup__title">Novo local</h2>
				<form className="popup__form add-card-popup__form" noValidate>
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
				</form>
			</div>
    </section>
	)
}