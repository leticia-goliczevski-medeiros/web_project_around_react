import '../blocks/gallery.css';
import deleteIcon from '../images/delete-icon.png'
import heartIcon from '../images/heart-icon.png'
import heartIconAcive from '../images/heart-icon-active.png'

export default function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  } 
  return (
    <li className="gallery__card" >
      <img className="gallery__card-image" src={card.link} onClick={handleClick} alt={card.name} />
      <img
        className="gallery__delete-icon"
        src={deleteIcon}
        alt="Ícone de excluir."
      />
      <div className="gallery__card-info">
        <h2 className="gallery__card-title">{card.name}</h2>
        <div className="gallery__like-info">
          <img
            className="gallery__heart-icon"
            src={card.isLiked? heartIconAcive: heartIcon}
            alt="Ícone de coração."
          />
          {/* <p className="gallery__like-count">{card.likes.length}</p> */}
        </div>
      </div>
    </li>
  )
}