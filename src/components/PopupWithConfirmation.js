import '../blocks/popup.css'
import closeIcon from '../images/close-icon.png'

export default function PopupWithConfirmation() {
	return (
		<section className="popup popup-with-confirmation">
			<div className="popup__container popup-with-confirmation__container">
				<img
					className="popup__close-icon popup-with-confirmation__close-icon"
					src={closeIcon}
					alt="Ícone de fechar."
				/>
				<h2 className="popup__title">Tem certeza?</h2>
				<button
					className="popup__submit-button popup-with-confirmation__submit-button"
					type="submit"
				>
					Sim
				</button>
			</div>
    </section>
	)
}