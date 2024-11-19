import '../../../../blocks/popup.css';
import closeIcon from '../../../../images/close-icon.png';

export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <section className={`popup`}>
      <div className={title? `popup__container`: `image-popup__container`}>
      <img
        className="popup__close-icon"
        src={closeIcon}
        alt="Ícone de fechar."
        onClick={onClose}
      />
      {title && <h2 className="popup__title">{title}</h2>}
      {children}
      </div>
    </section>
  )
}