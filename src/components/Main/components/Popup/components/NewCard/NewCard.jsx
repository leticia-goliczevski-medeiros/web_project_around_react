export default function NewCard() {

  return (
    <form name='add-card-popup'
        className="popup__form"
        noValidate>
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
  
  )
}